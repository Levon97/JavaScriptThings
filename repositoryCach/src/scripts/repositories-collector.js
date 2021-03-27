const axios = require('axios');

const Repo = require('../models/repo');
const configs = require('../configs');

const mongoose = require('mongoose');
const repo = require('../models/repo');
const gitApi = 'https://api.github.com/search/repositories?q=search%20text';

const redis = require('redis');
const publisher = redis.createClient();

//collecting random repositories
async function getRepos() {
    const repos = await axios.get(gitApi)

    const randomRepos = await repos.data.items.sort(() => Math.random() - Math.random()).slice(0, 5);

    return randomRepos;
}

//geting repoos with specific fields
async function processRepos(randomrepos) {

    randomRepos = await getRepos();

    const mappedRepos = randomRepos.map(repo => ({

        id: repo.id,
        node_id: repo.node_id,
        name: repo.name,
        full_name: repo.full_name,

        owner_login: repo.owner.login,
        owner_id: repo.owner.id,
        owner_node_id: repo.owner.node_id,
        owner_avatar_url: repo.owner.avatar_url,

        html_url: repo.html_url,
        description: repo.description,
        url: repo.url,
        forks_url: repo.forks_url,
        keys_url: repo.keys_url,
        collaborators_url: repo.collaborators_url,
        teams_url: repo.teams_url,
        hooks_url: repo.hooks_url,
        issue_events_url: repo.issue_events_url,
        events_url: repo.events_url,
        assignees_url: repo.assignees_url,
        branches_url: repo.branches_url,
        tags_url: repo.tags_url,
        blobs_url: repo.blobs_url,
        git_tags_url: repo.git_tags_url,
        git_refs_url: repo.git_refs_url,
        trees_url: repo.trees_url,
        created_at: repo.created_at,
        updated_at: repo.updated_at,
        pushed_at: repo.pushed_at,
        git_url: repo.git_url,
        ssh_url: repo.ssh_url,
        clone_url: repo.clone_url,
        svn_url: repo.svn_url,
        homepage: repo.homepage,

    }))
    return mappedRepos;
}



// saving to mongoDB rundom repos
async function saveReposToMongoDb(mappedRepos) {
    mappedRepos = await processRepos();


    try {
        for (mappedRepo of mappedRepos) {
            let repo = new Repo(mappedRepo);
            await repo.save();
        }
    } catch (error) {
        console.log(error);
    }
}


//DB conection: db.disconnect is called when there is no tasks left
(async () => {
    try {
        const db = await mongoose.connect(configs.db.url, configs.db.options);
        console.log('Connection to DB Successful');

        await saveReposToMongoDb();
        console.log("repos saved to mongo DB");

        await getCount();
        await chachCount();
        await db.disconnect();

        process.exit(0);
        

    } catch (error) {
        console.log(error);
    }
})();

// chach data with redis
async function getCount() {
    return await Repo.countDocuments();

}
//caching count by using pub/sub and returning message in json
async function chachCount(reposCount) {
    reposCount = await getCount();
    publisher.set('count',reposCount);
    publisher.publish("cach updater",JSON.stringify({"count":reposCount}))
    

}


const redis = require('redis');
const subscriber = redis.createClient();

const Repo = require('../models/repo');


//get Repos count (working only when listening to Script )
async function getReposCount(req, res) {
    try {
        //  const  repo  = await Repo.find();
        //  res.json({data:repo});
        subscriber.on("message", async (channel, message) => {
            await res.json({data:message});
        });
        subscriber.subscribe('cach updater');

    } catch (error) {
        console.error()
        res.stat
    }
}
module.exports = getReposCount;
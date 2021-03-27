const mongoose = require('mongoose');

const repoSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    node_id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    full_name: {
        type: String,
        required: true
    },

    owner_login: {
        type: String,
        required: true
    },
    owner_id: {
        type: Number,
        required: true
    },
    owner_node_id: {
        type: String,
        required: true
    },
    owner_avatar_url: {
        type: String,
        required: true
    },
    html_url: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    forks_url: {
        type: String,
        required: true
    },
    keys_url: {
        type: String,
        required: true
    },
    collaborators_url: {
        type: String,
        required: true
    },
    teams_url: {
        type: String,
        required: true
    },
    hooks_url: {
        type: String,
        required: true
    },
    issue_events_url: {
        type: String,
        required: true
    },
    events_url: {
        type: String,
        required: true
    },
    assignees_url: {
        type: String,
        required: true
    },
    branches_url: {
        type: String,
        required: true
    },
    tags_url: {
        type: String,
        required: true
    },
    blobs_url: {
        type: String,
        required: true
    },
    git_tags_url: {
        type: String,
        required: true
    },
    git_refs_url: {
        type: String,
        required: true
    },
    trees_url: {
        type: String,
        required: true
    },
    created_at: {
        type: String,
        required: true
    },
    updated_at: {
        type: String,
        required: true
    },
    pushed_at: {
        type: String,
        required: true
    },
    git_url: {
        type: String,
        required: true
    },
    ssh_url: {
        type: String,
        required: true
    },
    clone_url: {
        type: String,
        required: true
    },
    svn_url: {
        type: String,
        required: true
    },
    homepage: {
        type: String,
        required: false
    },
    

});


module.exports = mongoose.model("Repo", repoSchema);
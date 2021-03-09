const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    userId:{
        type: String,
    },
    description: {
        type: String,
        min: 3,
        max: 255,
    },
    postImage: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
      },
})

module.exports = mongoose.model("Post", postSchema);
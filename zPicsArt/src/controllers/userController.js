const fs = require('fs');
const Post = require('../models/post');
const moment = require('moment');
const User = require('../models/user');


async function creatPost(req, res) {
    if (!(req.file)) {
        return res.status(400).json({ error: 'no Image selected' });
    }
    const post = Post({
        userId: req.user.id,
        description: req.body.description,
        postImage: req.file.path
    })
    try {
        const createdPost = await post.save();
        res.json({ data: createdPost });
    } catch (error) {
        console.error()
        res.status(400).json({ error });
    }
}




async function editPost(req, res) {
    const selectedId = req.params.id;
    const loginUserId = req.user.id;
    const post = await Post.findById(selectedId);

    if (!post) {
        return res.status(400).json({ error: "wrong id selected" })
    }

    if (post.userId !== loginUserId) {
        return res.status(400).json({ error: "access denied" })
    }

    let imageRef;
    if (req.file) {
        imageRef = req.file.path;
        fs.unlinkSync(post.postImage)
    }

    if (!req.file) {
        imageRef = null;
    }

    const update = {
        description: req.body.description || post.description,
        postImage: imageRef || post.postImage
    }
    const filter = { _id: selectedId }

    try {

        let editedPost = await Post.findOneAndUpdate(filter, update, {
            new: true
        });

        res.json({ data: editedPost });

    } catch (error) {
        console.error()
        res.status(400).json({ error });
    }
}



async function deletePost(req, res) {
    const selectedId = req.params.id;
    const loginUserId = req.user.id;
    const post = await Post.findById(selectedId);

    if (!post) {
        return res.status(400).json({ error: "wrong id selected" })
    }

    if (post.userId !== loginUserId) {
        return res.status(400).json({ error: "access denied" })
    }

    fs.unlinkSync(post.postImage)

    try {
        let deletedPost = await Post.deleteOne({ _id: req.params.id });
        res.json({ data: "succsess" })
    } catch (error) {
        console.error()
        res.status(400).json({ error });
    }

}

async function getAllPosts(req, res) {
    try {
        const posts = await Post.find()
        res.json({ data: posts })
    } catch (error) {
        console.error()
        res.status(400).json({ error });
    }
}

async function getPostsOfDay(req, res) {
    try {
        const posts = await Post.find()
        const filteredPosts = posts.filter(post => moment().unix(post.date) >= moment().startOf("day").unix())
        res.json({ data: filteredPosts })
    } catch (error) {
        console.error()
        res.status(400).json({ error });
    }
}

async function getMyPosts(req, res) {
    try {
        const posts = await Post.find({ userId: req.user.id });
        res.json({ data: posts })


    } catch (error) {
        console.error()
        res.status(400).json({ error });
    }
}

async function usersPosts(req, res) {
    try {
        const posts = await Post.find({ userId: req.params.id });
        res.json({ data: posts })


    } catch (error) {
        console.error()
        res.status(400).json({ error });
    }
}

async function searchPost(req, res) {
    try {
        search = req.params.search;
        const posts = await Post.find();
        results = posts.filter(post => post.description.toLowerCase().includes(search.toLowerCase()))
        res.json({ data: results });
    } catch (error) {
        console.error()
        res.status(400).json({ error });
    }
}

async function getPostById(req, res) {
    try {
        let post = await Post.findById(req.params.id);
        res.json({ data: post });
    } catch (error) {
        console.error()
        res.status(400).json({ error });
    }
}

// news content shows how many users and posts 
async function guestView(req, res) {
    try {
        const posts = (await Post.find()).length;
        const users = (await user.find()).length;
        res.json({
            users: users,
            posts: posts

        })
    } catch (error) {
        console.error()
        res.status(400).json({ error });
    }

}

async function searchUser(req, res) {
    const searchedText = req.params.search;
    try {
        const user = await User.find();
        const users = user.filter(userr => {
            if (userr.name.toLowerCase().includes(searchedText.toLowerCase())
                || userr.lastName.toLowerCase().includes(searchedText.toLowerCase())) return user;
        })

        if(users.length==0){
            return res.status(404).json({error:"user not found"})
        }

        res.json({ data: users })
    } catch (error) {
        console.error()
        res.status(400).json({ error });
    }




}

module.exports = {
    creatPost,
    editPost,
    deletePost,
    getAllPosts,
    getPostsOfDay,
    getMyPosts,
    searchPost,
    guestView,
    getPostById,
    usersPosts,
    searchUser

}
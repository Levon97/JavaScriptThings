const User = require('../models/userModel.js');
const utils = require('../utils.js');

async function getUsers(req, res) {
    try {
        const users = await User.getAll();
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(users));
    } catch (error) {
        console.log(error);
    }
}

async function getUser(req, res, id) {
    try {
        const user = await User.getById(id);

        if (!user) {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'User not found' }));

        } else {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(user));
        }
    } catch (error) {
        console.log(error);
    }
}

async function searchUsers(req, res, searchedText) {
    try {
        const results = await User.searchByName(searchedText);
        if (JSON.stringify(results) === '[]') {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: "no matches" }));
        } else {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(results));
        }


    } catch (error) {
        console.log(console.error)
    }
}

async function creat(req, res) {
    try {
        const body = await utils.getPostData(req);
        const { id, name, sureName } = JSON.parse(body);

        const user = {
            id,
            name,
            sureName,
        };
        const newUser = await User.creatUser(user);
        res.writeHead(201,{'Content-Type': 'application/json'})
        return res.end(JSON.stringify(newUser));
    } catch (error) {
        console.log(error)
    }
}

async function update(req,res,id){
    try {
            const user = await User.getById(id);
        if(!user){
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'User not found' }));
        }else{
            const body = await utils.getPostData(req);
            const {name, sureName } = JSON.parse(body);
    
            const userData = {
                name:name || user.name,
                
                sureName: sureName || user.sureName,
            };
            const updUser = await User.updateUser(id,userData);
            res.writeHead(200,{'Content-Type': 'application/json'})
            return res.end(JSON.stringify(updUser));
        }



     
    } catch (error) {
        console.log(error)
    }
}
async function deleteUser(req,res,id){
    try {
        const user = await User.getById(id);
        if(!user) {
            res.writeHead(404, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ message: 'user Not Found' }))
        } else {
            await User.remove(id);
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ message: ` ${id} removed` }))
        }
    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    getUsers,
    getUser,
    searchUsers,
    creat,
    update,
    deleteUser
}
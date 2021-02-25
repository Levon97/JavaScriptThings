
let users = require('../data/users.json')
const utils = require('../utils.js')

function getUsers(req, res) {
    res.send(users);
}

function getUserById(req, res) {
    const user = users.find(u => u.id === req.params.id);
    res.send(user);
}

function searchUser(req, res) {
    const results = users.filter(user => {
        if (user.name.includes(req.params.search) || user.sureName.includes(req.params.search)) return user;
    });
    res.send(results);
}
function deleteUser(req, res) {
    const user = users.find(u => u.id === req.params.id);

    if (!user) {
        res.send("User not defined");
    } else {
        users = users.filter(u => u.id !== req.params.id);
        utils.writer('./data/users.json', users);
        res.send(`user  deleted`)
    }


}

function newUser(req, res) {
    const user = req.body;

    users.push(user);
    utils.writer('./data/users.json', users);
    res.send(user);
}

 async function updateUser(req, res) {
    const index = users.findIndex((u) => u.id === req.params.id)
    
    if (index) {
        res.send("User not found")
    } else {
        let id = req.params.id;
        let name = req.body.name;
        let sureName = req.body.sureName;
       
        users[index] = {id,name,sureName};
        utils.writer('./data/users.json', users);
        res.send(users[index])
    }
    

}


module.exports = {
    getUsers,
    getUserById,
    searchUser,
    deleteUser,
    newUser,
    updateUser
}
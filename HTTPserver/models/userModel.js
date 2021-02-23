let users = require('../data/users.json');
const utils = require('../utils.js');

function getAll() {
    return new Promise((resolve, reject) => {
        resolve(users);
    })
}



function getById(id) {
    return new Promise((resolve, reject) => {
        const user = users.find(u => u.id === id);
        resolve(user);
    })
}

function searchByName(searchedText) {
    return new Promise((resolve, reject) => {
        const results = users.filter(user => {
            if (user.name.includes(searchedText) || user.sureName.includes(searchedText)) return user;
        });
        resolve(results);
    })

}

function creatUser(user) {
    return new Promise((resolve, reject) => {
        const newUser = { ...user };
        users.push(newUser);
        utils.writer('./data/users.json', users);
        resolve(newUser);
    })
}

function updateUser(id, user) {
    return new Promise((resolve, reject) => {
        const index = users.findIndex((u) =>u.id===id);
        users[index] = {id,...user};
        utils.writer('./data/users.json', users);
        resolve(users[index]);
    })
}

function remove(id){
    return new Promise((resolve,reject)=>{
        users = users.filter(u =>u.id !==id);
        utils.writer('./data/users.json', users);
        resolve();
    })
}



module.exports = {
    getAll,
    getById,
    searchByName,
    creatUser,
    updateUser,
    remove

}
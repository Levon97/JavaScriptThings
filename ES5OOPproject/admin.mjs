import User from './user.mjs';
var listOfUsers = [];
export default function Admin(name,email,photos,videos){
    User.call(this,name,email,photos,videos);
    this.listOfUsers = listOfUsers;
}
Admin.prototype = Object.create(User.prototype);
Admin.prototype.constructor = Admin;

Admin.prototype.editUsers = function(){
    
    // changeing array => listofUsers by using array.filter
}

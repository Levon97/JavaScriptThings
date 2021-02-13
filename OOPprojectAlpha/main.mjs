import Admin from './admin.mjs';
import User from './user.mjs';
import Photos from './photo.mjs';
import Video from './video.mjs';
import Photo from './photo.mjs';

let photo  =  new Photo("photo","8k",12,"4:3");
photo.printInfo();
let video  =  new Video("video","8k",12,"1.56min",photo);
video.printInfo();
let user  = new User("user","user@us.am",[photo],[video]);
user.homePage();
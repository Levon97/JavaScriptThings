
export default function User(name,email,photos,videos){
    this.name = name;
    this.email = email;
    this.photos = photos;
    this.videos = videos;
}

User.prototype.addPhoto = function(photo){
    photos.push(photo);
}

User.prototype.deletePhoto = function(){
    // there can be  logic with array.filter
}

User.prototype.addVideo = function(video){
    videos.push(video);
}

User.prototype.deleteVideo = function(){
    // there can be  logic with array.filter
}



 User.prototype.videoList = function (){
     if (this.videos.length === 0){
         console.log( `video segment is epty`);

     }
     else{
         this.videos.forEach(element => {
            console.log(element.name,element);
         });
     }
 }
User.prototype.photoList = function (){
    if (this.videos.length === 0){
        console.log( `photo segment is epty`);

    }
    else{
        this.photos.forEach(element => {
           console.log(element.name,element);
        });
    }
}

User.prototype.homePage = function(){
    console.log('-------------Photos-------------')
    this.photoList();
    console.log('-------------Videos-------------')
    this.videoList();
}




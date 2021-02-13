import Multimedia from './multimedia.mjs';
export default function Photo(name,resolation,size,format){
    User.call(this,name,resolation,size)
        this.format = format;
}
Photo.prototype =Object.create(Multimedia.prototype);
Photo.prototype.constructor = Photo;

Photo.prototype.printInfo = function(){
    console.log(`Photo's name: ${this.name}
Photos's resolation: ${this.resolation}
Photo's size: ${this.size}
Photo's format: ${this.format}`)
}



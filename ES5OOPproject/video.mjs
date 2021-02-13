import Multimedia from './multimedia.mjs';
export default function Video(name,resolation,size,duration,preview){
    Multimedia.call(this,name,resolation,size)
    this.duration = duration;
    this.preview = preview;
}
Video.prototype =Object.create(Multimedia.prototype);
Video.prototype.constructor = Video;

Video.prototype.printInfo = function(){
    console.log(`Video's name: ${this.name}
Video's resolation: ${this.resolation}
Vidoe's size: ${this.size}
Video's duratiin: ${this.duration}
`)
}
Video.prototype.setPrewiew = function(){
    // frame from middle of video (frame must be Photo object)
}

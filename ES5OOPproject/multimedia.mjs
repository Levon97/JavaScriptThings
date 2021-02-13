export default function Multimedia(name,resolation,size){
 this.name = name;
 this.resolation = resolation;
 this.size = size; 

}

Multimedia.prototype.compressor = function(){
    if(typeof this.size === 'number'){
    let compressingIndex = 2.9;
    this.size = (this.size)/2.9;
    }
}

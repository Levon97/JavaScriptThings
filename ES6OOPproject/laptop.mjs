import Device from "./device.mjs";

export default class Laptop extends Device{
    constructor(price,processorUnit,ram,model,rom,vCard){
        super(price,processorUnit,ram,model)
        this.rom = rom;
        this.vCard = vCard;
        
    }
    laptopInfo(){
        console.log(`price: ${this.price}
        processor unit: ${this.processorUnit}
        RAM: ${this.ram}
        model: ${this.model}
        ROM: ${this.rom}
        video card: ${this.vCard}`)
    }
}

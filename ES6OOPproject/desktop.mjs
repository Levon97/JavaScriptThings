import Device from "./device.mjs";

export default class Desktop extends Device{
    constructor(price,processorUnit,ram,model,rom,vCard,monitor){
        super(price,processorUnit,ram,model)
        this.rom = rom;
        this.vCard = vCard;
        this.monitor = monitor;
    }
     desktopInfo(){
         console.log(`price: ${this.price}
         processor unit: ${this.processorUnit}
         RAM: ${this.ram}
         model: ${this.model}
         ROM: ${this.rom}
         video card: ${this.vCard}
         monitor model: ${this.monitor}`)
     }
}

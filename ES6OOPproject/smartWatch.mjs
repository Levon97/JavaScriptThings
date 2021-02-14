import Device from "./device.mjs";

export default class SmartPhone extends Device {
    constructor(price,processorUnit,ram,model,rom,strapLength,heartRateSensor){
        super(price,processorUnit,ram,model)
        this.rom = rom;
        this.strapLength = strapLength;
        this.heartRateSensor = heartRateSensor;
    }
    smartWatchtInfo(){
        console.log(`price: ${this.price}
        processor unit: ${this.processorUnit}
        RAM: ${this.ram}
        model: ${this.model}
        ROM: ${this.rom}
        strap length: ${this.strapLength}
        heart rate sensor:: ${this.heartRateSensor}`)
    }
}
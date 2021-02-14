import Device from "./device.mjs";

export default class SmartPhone extends Device {
    constructor(price,processorUnit,ram,model,rom,batteryCap,screenSize){
        super(price,processorUnit,ram,model)
        this.rom = rom;
        this.batteryCap = batteryCap;
        this.screenSize = screenSize;
    }
    smartPhoneInfo(){
        console.log(`price: ${this.price}
        processor unit: ${this.processorUnit}
        RAM: ${this.ram}
        model: ${this.model}
        ROM: ${this.rom}
        battery capacity: ${this.batteryCap}
        screen size: ${this.screenSize}`)
    }
}
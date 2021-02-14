export default class Device{
    constructor(price,processorUnit,ram,model){
        this.price = price;
        this.processorUnit = processorUnit;
        this.ram = ram;
        this.model = model;

    }
    onSaleInfo(){
        console.log(`Price: ${this.price}
        Model: ${this.model}`)
    }
}

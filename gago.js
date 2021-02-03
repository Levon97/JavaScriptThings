
let promise = new Promise(function(resolve,reject){
    setTimeout(()=> resolve("done"),1000);
    console.log(()=> "done")

})


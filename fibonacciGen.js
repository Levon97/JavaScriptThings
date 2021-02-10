function fibGet(num){

    function* fibGenerator(){
    let fib0 = 0;
    let fib1 = 1;
    let fib = fib0+fib1;
        while(fib1<=num){
            yield fib1;
            fib0 = fib1;
            fib1=fib;
            fib=fib0+fib1;
        }
    }
    for(let fibnum of fibGenerator()){
        console.log(fibnum)
    }

}
fibGet(200)
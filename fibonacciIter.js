function fibGet(num){
    let fibIterator = {
    
    [Symbol.iterator]: ()=>{
        
        fib0 = 0;
        fib1 = 1;
        fibRow = fib0 +fib1;
       
        return {
            next : ()=>{
                fib0 = fib1;
                fib1 = fibRow;
                fibRow = fib0 +fib1;
            return {done:false,value: fib0}
        }
    }
        
    
    },
   
    
    }
    for(let fibNum of fibIterator){
        if(fibNum>num) break;
        console.log(fibNum);
        
    
    
    }
}
fibGet(200)


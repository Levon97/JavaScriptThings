function promisify(functionForPromisify){
    return (...args)=>{
        return new Promise((res,rej)=>{
            functionForPromisify(...args,(err,result)=>{
                if(err){
                    rej(err);
                }else{
                    res(result);
                }
            })
        })
    }
}

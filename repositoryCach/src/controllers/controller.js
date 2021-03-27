const redis = require('redis');

const subscriber = redis.createClient();
//


//get Repos count
async function getReposCount(req,res){
    try {
        subscriber.on("message",(channel,message)=>);
 subscriber.subscribe('cach updater');
        
    } catch (error) {
        console.error()
        res.stat
}
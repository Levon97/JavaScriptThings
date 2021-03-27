const redis = require('redis');

const subscriber = redis.createClient();
//
subscriber.on("message",(channel,message)=>console.log(channel,message));
 subscriber.subscribe('cach updater');

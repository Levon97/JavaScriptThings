const fs  = require('fs');
const dotenv = {
     config: () => {
        var lines = require('fs').readFileSync('.env', 'utf-8')
        .split('\n')
    lines.forEach(element => {
         if(element.includes('=')){
            if(!element.startsWith('#') && !element.includes(' ')){
                let name = element.split('=')[0];
                let value = element.split('=')[1];
                let newObj = {
                [name]: value
                }
                Object.assign(process.env, newObj)
            }
        }
    });
    }
}
module.exports = dotenv;

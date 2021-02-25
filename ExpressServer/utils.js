const fs = require('fs');
function writer(file, content) {
    fs.writeFileSync(file, JSON.stringify(content), 'utf8', (err) => {
        if (err) {
            console.log(err);
        }
    })
}




module.exports = {
    writer,
    
}

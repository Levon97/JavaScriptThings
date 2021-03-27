require('dotenv').config();

const express = require('express')
const mongoose = require('mongoose');

const configs = require('./configs');
const router = require('./routers/router')

const app = express();

app.use(express.json());
app.use(router);

// mongoose conection with async/await for matching project structure
(async () => {
    try {
        await mongoose.connect(configs.db.url, configs.db.options);
        console.log('Connection to DB Successful');
        app.listen(configs.env.PORT, () => {
            console.log(`Server is running ${configs.env.PORT}`);
          });
    } catch (err) {
        console.log('Connection to DB Failed');
    }
})();



app.get('*', (req, res) => {
    res.send("No such a route exist")
})


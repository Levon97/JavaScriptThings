require('dotenv').config();
const express = require('express');
const server = express();
const mongoose = require('mongoose');
const authRoutes = require("./routes/auth");
const loginState = require('./routes/logInState')
const guestState = require('./routes/guestState')
mongoose.connect(
    process.env.DB_CONNECTION,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    () => console.log("connected to db")
);
server.use(express.json());
server.use(express.static('img'))
server.use("/", authRoutes);
server.use('/',loginState);
server.use('/',guestState)
server.get('*',(req,res)=>{
    res.send("No such a route exist")
})

server.listen(3000)



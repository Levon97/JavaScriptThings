const express = require('express');
const { route } = require('./routes/users.js');
const usersRoutes = require('./routes/users.js')

const app = express();
const PORT = 3000;

app.use(express.json())
app.use('/users',usersRoutes)
app.get('/',(req,res)=>res.send('Welcome to the users API'))
app.all('*', (req,res)=> res.send('Route dose note exist.'))

app.listen(PORT,()=>console.log(`Server runing on port : http://localhost:${PORT}`))
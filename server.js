const express = require('express')
const dotenv = require('dotenv')
const persons=require("./routes/persons")
const connectdb = require('./config/connectdb')
const app = express()
dotenv.config();
//connect to our db 
connectdb();
app.use(express.json())

app.use('/api/users',persons) // every route inside of the persons routes begin with users : http://localhost:5000/api/users
// PORT 
const PORT = process.env.PORT || 5000
app.listen(PORT,(err)=>{
    if (err){console.log(err)}
    else { console.log( `Server is running at ${PORT}`)}
})

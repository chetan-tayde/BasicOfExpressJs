const express = require('express')
const app = express()

// here we are importing the logger.js file 
// function which is as as a middleware
const logger = require('./logger')
const logger2 = require('./BasicMiddleware/logger2')

// Here we are passing multiple middleware
app.use([logger,logger2])
 
app.get('/',(req,res)=>{
    res.send("This is Home page")
})
app.get('/about',(req,res)=>{
    res.send("This is About page")
})
app.listen(5000,()=>{
    console.log("Listening....")
})
// Here we can have the how to serve the static web pages using express server

const express = require('express');
const path = require('path');

const app = express();
app.use(express.static('./Index'))
// in case of multiple files and pages 
// drop all files into one public folder 
// and use that public folder into middleware

app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./Index.html'))
})
app.all('*',(req,res)=>{
   res.status(404).send("Resource Not Found")
})

app.listen(5000, ()=>{
    console.log("The Server is Listening")
})
const express = require('express');
const app = express();


app.get('/',(req,res)=>{
  res.status(200).send("This Is Home Page")
})
app.get('/about',(req,res)=>{
    res.status(200).send("This is about page")
})
app.all('*',(req,res)=>{
    res.status(404).send('<h1>Page Is Not Found<h1/>')
})
app.listen(5000,()=>{
    console.log("Listiening the serevr..")
})
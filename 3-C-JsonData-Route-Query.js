// int the below code we getting json data by using method 
// as well as by route params and query parameter

const express = require('express');
const app = express();

// Here we are importing data from the Data.js file
const {product} = require('./Data')
app.get('/',(req,res)=>{
    res.send('This is Home page')
})


app.get('/api/product',(req,res)=>{
    // Here We getting required data from data.js file  
 const newProducts = product.map((product)=>{
        const{id,name,age}=product;
        return{id,name,age}
    })
    res.json(newProducts)
})

// // Here we are getting only single product from data.js file by using find method
// app.get('/api/product/1',(req,res)=>{
//     const singleProduct = product.find((product)=>product.id === 1)
//      res.json(singleProduct)
//     })


// Here we are getting single product by using single code instead retyping the same code again and again
app.get('/api/product/:productID',(req,res)=>{
    const{productID} = req.params
    const singleProductOnly = product.find((product)=>product.id===Number(productID))
    if(!singleProductOnly){
        res.status(404).send("Product Does Not Existed")
    }
    res.json(singleProductOnly)
})
// Upto the above we have code about route params and all about route parameter to get data



// Here  following we have implemented query string parameter to get data
app.get('/api/v1/query',(req,res)=>{
    const {search ,limit} = req.query
    let sortedProducts = [...product]

    if(search){
        sortedProducts = sortedProducts.filter((product)=>{
            return product.name.startsWith(search)
        })
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0,Number(limit))
    }
    res.status(200).json(sortedProducts)
})


app.listen(5000,()=>{
    console.log("Listening..")
})
const logger2 = ((req,res,next)=>{
   console.log("This is Second middleware")
   next()
})

module.exports = logger2
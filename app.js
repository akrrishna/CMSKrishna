const app =  require("express")();

const { connectDatabase } = require("./database/database");

//Database connetion function
connectDatabase()



//GET Api

app.get("/",(req,res)=>{
    res.json({
        status : 200,
        message : "success"
    })
})





app.listen(3000,()=>{
    console.log("NodeJs has started at port 3000")
})
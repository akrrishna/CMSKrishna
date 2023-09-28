const mongoose = require("mongoose");
exports.connectDatabase= async()=>{

    //connecting to database

await mongoose.connect("mongodb+srv://krishnahere:143krishna@cluster0.cfrhjas.mongodb.net/?retryWrites=true&w=majority")
console.log("database connected successfully");

}
const mongoose = require("mongoose")
// const Schema = mongoose.Schema

const blogSchema = mongoose.Schema({
    
    title : {
        type : String,
        unique : true
        // required : true
    },

    subTitle : {
        type : String
    },

    description : {
        type : String
    }

},{
     timestamps : true 
})

const Blog = mongoose.model("Blog",blogSchema)

module.exports = Blog

// module.exports = mongoose.model("Blog",blogSchema)
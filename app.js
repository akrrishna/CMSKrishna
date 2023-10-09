const { connectDatabase } = require("./database/database");
const Blog = require("./model/blogModel");

const express = require("express")

const app =  express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))

connectDatabase()

//GET Api
app.get("/",(req,res)=>{
    res.json({
        status : 200,
        message : "success"
    })
})

//GET API for All Blogs
app.get("/blogs",async (req,res)=>{

    //fetching all blogs
const blogs = await Blog.find()

if(blogs.length==0){
    res.status(404).json({
        // status : 404,
        message : "No blogs Found"
    })
}
else{

    res.status(200).json({
        // status : 200,
        message : "All Blogs Fetched Successfully",
        data : blogs
    })

}
   
})

//Get API  blogs/:id (single blog)

app.get("/blogs/:id",async (req,res)=>{
    const id = req.params.id
//  const blog =  await Blog.find({_id:id})
//  if(blog.length==0){
//     res.json({
//         message : "No blogs with that id"
//     })
//  }
const blog = await Blog.findById(id)
 if(blog){

    
    res.json({
        message : "Blog found Successfully",
        data : blog
        
    })

 }
 else{

    res.json({
                message : "No blogs with that id"
            })

 }

})

//Create Blog Api
app.post("/blogs",async (req,res)=>{
    const title = req.body.title
    const subTitle = req.body.subTitle
    const description = req.body.description

    //Alternative object destructuring
    // const {title,subTitle,description} = req.body

    //DATABASE LOGIC
   await Blog.create({
        title: title,
        subTitle: subTitle,
        description : description
    })

    res.json({
        status:200,
        message:"Blog creation Success"
    })

    //AlTERNATIVE
    //res.status(200).json({
    //     message : "Blog creation success"~
    // })
})

// Update BLog APi
app.patch("/blogs/:id",async (req,res)=>{
    const id = req.params.id
    const title = req.body.title
    const subTitle = req.body.subTitle
    const description = req.body.description

    await Blog.findByIdAndUpdate(id,{
        title : title,
        subtitle : subTitle,
        description : description

    })

    res.status(200).json({
        message : "Blog updated success"
    })
})

//Delete Blog API
app.delete("/blogs/:id",async (req,res)=>{
    const id  = req.params.id

    await Blog.findByIdAndDelete(id)

    res.json({
        status : 200,
        message : "Blog deletion success"
    })
})

app.listen(3000,()=>{
    console.log("NodeJs has started at port 3000")
})
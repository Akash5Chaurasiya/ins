const { Schema, model } = require("mongoose");

const postSchema=Schema({
    title:String,
    body:String,
    device:String,
    no_of_comments:Number,
    user:String,
    userId:String,
},{
    versionKey:false
})

const postModel=model('post',postSchema)

module.exports ={
    postModel
}
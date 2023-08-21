const mongoose =require('mongoose');
require('dotenv').config();


mongoose.connect(process.env.mongoURL).then(()=>{
    console.log('connected to MongoDB');
}).catch((err)=>{
    console.log("Error connecting to MongoDB");
})

module.exports=mongoose.connection;
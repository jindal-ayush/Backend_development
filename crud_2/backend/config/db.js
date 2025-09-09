const mongoose = require("mongoose");

const connectDB = async() =>{
    try{
    await mongoose.connect("mongodb://127.0.0.1/mern-crud");
    console.log("mongoDB Connected");
    }catch(err){
        console.log("mongoDB Error", err.message);
    }
}

module.exports = connectDB;

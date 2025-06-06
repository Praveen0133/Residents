const mongoose=require("mongoose");


const connectDb=async ()=>{
    try {
        await mongoose.connect('mongodb://localhost:27017/Residency')
        console.log("db connection succefully");
    } catch (error) {
        console.log("mongoose connection fail")
    }
}

module.exports=connectDb;

















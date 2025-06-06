const mongoose=require("mongoose");


const connectDb=async ()=>{
    try {
        await mongoose.connect('mongodb+srv://real_estate_app:Praveen%40034@cluster0.2llqy.mongodb.net/Residency?retryWrites=true&w=majority&appName=Cluster0')
        console.log("db connection succefully");
    } catch (error) {
        console.log("mongoose connection fail")
    }
}

module.exports=connectDb;

















const mongoose=require("mongoose")
const userSchema=new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  role: { type: String, required: true },
  profilePhoto: { type: String },
  linkedin: { type: String },    
})

module.exports=mongoose.model("User",userSchema)

//this is my user modal



const mongoose=require('mongoose');
const userSchema=mongoose.Schema({
   userId:String,
   userName:String,
   email:String
})
const userData=mongoose.model('user',userSchema);
module.exports=userData
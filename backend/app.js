const express=require('express');
const app=new express();
const PORT=4000;
require('./connection')
 app.use(express.json());
const userModel=require('./model/userData');
const cors=require('cors');
const userData = require('./model/userData');
app.use(cors())
// API for fetching pr reading the data from the DB
app.get('/users',async (req,res)=>{
try{
    const data=await userModel.find()
    res.send(data);
}
catch(error){
    console.log("error occured");
}
});
app.post('/newuser',async(req,res)=>{
    try {
        
            var item=req.body;
            const datasave=new userModel(item);
            const saveddata= await datasave.save();
            res.send('Post successful');
       
    } catch (error) {
        console.log(error)
    }
})
// API for deletion
app.delete('/userremoval/:id',async(req,res)=>{
try{
    await userModel.findByIdAndDelete(req.params.id);
    res.send("Deleted successfully");
}
catch(error){
    console.log("error in deletion");
}
})
//API for updation
app.put('/userupdation/:id',async (req,res)=>{
    try {
     const data= await userModel.findByIdAndUpdate(req.params.id,req.body);
     res.send('Updated successfully')
    } catch (error) {
     console.log(error)
    }
 })
// server in listening mode
app.listen(PORT,()=>{
    console.log(`The server is listening at ${PORT} in the console`);
});
const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://aryaunni210:SFPlPbfspZO1JMTu@cluster0.tcp0rgi.mongodb.net/userDB?retryWrites=true&w=majority&appName=Cluster0').then((res)=>{
    console.log('DB connected')
}).catch((res)=>{
    console.log("DB is not connected");
});

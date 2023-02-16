const mongoose =  require("mongoose");


const DB = "mongodb+srv://saurabhsingh:didi8871@cluster0.g47a2iq.mongodb.net/Mernauth?retryWrites=true&w=majority"

mongoose.connect(DB,{
    useUnifiedTopology:true,
    useNewUrlParser: true
}).then(()=>console.log("DATABASE CONNECTED")).catch((error)=>{
    console.log(error);
})
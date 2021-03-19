const mongoose=require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    url:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    }
    
});

module.exports= mongoose.model("bankdetails",userSchema);;

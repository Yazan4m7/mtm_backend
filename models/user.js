const mongoose=require('mongoose');

const userSchema= mongoose.Schema({
   userId:{
    type:String,
    required:true,
   },

  
   rule:{
      
     type: String,
     default : ""
   },
   
   name:{
    type :   String,
default:""

   },

   discount:{
    type :   String,
   default:""
   },
   password:{
    type:String,
    required:true,
   }

});

const User = mongoose.model("user",userSchema);

module.exports=User;
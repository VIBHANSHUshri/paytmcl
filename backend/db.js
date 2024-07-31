const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    username:{
        type : String ,
        unique : true,
        required : true,
        trim:true,
        lowercase:true,
        minLength:3,
        maxLength:10,
    },
   
     password:{
       type : String,
       unique : false,
       required : true,
       minLength : 6,
     },
    firstName:{
        type:String,
        required:true,
        trim:true,
        maxLength:50,    

    },
    lastName:{
     type : String,
     required : true,
     trim : true,
     maxLength : 50,
}
});

const User = mongoose.model('User' , UserSchema);
module.exports = {
    User
};
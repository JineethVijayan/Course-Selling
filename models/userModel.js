import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    firstName:{
        type : String,
        required : true,
        minLength : 3 ,
        maxLength : 10
    },
    lastName:{
        type : String,
        required : true,
        minLength : 3 ,
        maxLength : 10
    },
    hashPassword:{
        type : String,
        required : true ,
        minLength: 5
    },
    email:{
        type : String ,
        required : true ,
        unique : true, 
        minLength:3,
        maxLength:30
    },
    coures:[{type:mongoose.Types.ObjectId,ref:"Course"}]

},
{ timestamps: true }
)

const User = mongoose.model("User",userSchema);


export default User;
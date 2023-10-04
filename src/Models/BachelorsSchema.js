import mongoose  from "mongoose";


const BachelorSchema = new mongoose.Schema(
    {
        Faculty:{
            type:String,
            required:[true,"Please provide a Faculty"],
        },
        Major:{
            type:String,
            required:[true,"Please provide a Major"],
        },
        idcard:{
            type:String,
            required:[true,"Please provide a idcard"],
            unique:true,
        },
        birthday:{
            type:String,
            required:[true,"Please provide a  birthday"],
        },
        firstname:{
            type:String,
            required:[true,"Please provide a  firstname"],
        },
        lastname:{
            type:String,
            required:[true,"Please provide a lastname"],
        },
        email:{
            type:String,
            required:[true,"Please provide a email"],
        },
       tell:{
            type:String,
            required:[true,"Please provide a tell"],
        }, 
        level:{
            type:String,
        },
        DateRegister:{
            type:Date,
        }
    })
    const  BachelorsRegister = mongoose.models.Bachelors || mongoose.model("Bachelors",BachelorSchema)
    export default BachelorsRegister;
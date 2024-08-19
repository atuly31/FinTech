
import { timeStamp } from "console";
import mongoose from "mongoose";


const user_schema = new mongoose.Schema(
    {
        username:{
            type :String,
            require:true
        },
        Email:{
            type:String,
            require:true
        },
        password:{
            type:String,
            require:true,
        }
        
        
    },
    { timestamps: true }
)

const User_Model = mongoose.model("user",user_schema)
export default User_Model;
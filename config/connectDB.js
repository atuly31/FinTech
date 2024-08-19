import mongoose from "mongoose";

const connectDB = async()=>{
     try
     {
        await mongoose.connect(process.env.url)
        console.log(`server Running on ${mongoose.connection.host}`)
     } 
     catch (error)
     {
       console.log(error);
     }
}
export default connectDB;
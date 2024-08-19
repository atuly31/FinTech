import express from "express";
import cors from "cors";
import morgan from 'morgan';
import dotenv from 'dotenv';
import router from "./routes/userRoute.js";
import transaction_router from './routes/transactionRoute.js'
import connectdB from "./config/connectDB.js";

const app = express();
const port = 4000;

dotenv.config();


connectdB();

//Middleware
app.use(morgan());
app.use(express.json());
app.use(cors());


app.use('/api/v1/users', router)
app.use('/api/v1/transaction',transaction_router);



app.listen(port,()=>{
    console.log(`Server is listening to port ${port}`);
})


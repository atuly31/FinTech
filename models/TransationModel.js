import mongoose from "mongoose";
import { type } from "os";

const transaction_schema = new mongoose.Schema(
  {
    userid:{
      type:String,
      
    },
    amount: {
      type: Number,
      require: [true, "amount is required"],
    },
    category: {
      type: String,
      require: [true, "category is required"],
    },
    reference: {
      type: String,
    },
    description: {
      type: String,
      require: [true],
    },
    date: {
      type: Date,
      require: [true, "date is must"],
    },
  },
  { timestamps: true }
);

const transactionModel = mongoose.model("transaction", transaction_schema);
export default transactionModel;

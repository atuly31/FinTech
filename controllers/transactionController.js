import transactionModel from "../models/TransationModel.js";
import moment from "moment";

const add_transaction = async(req,res)=>
{
    try {
       const transaction_details = new transactionModel(req.body);
    
       
       await transaction_details.save();
       res.status(201).send('Transaction Created')
    } catch (error) {
        res.status(500).json({
            
            error
           })
    }
      
} 

const get_transaction = async (req, res) => {
    try {
        const { range } = req.body;
        console.log(`This is range value: ${range}`);
        
        const fromDate = moment().subtract(Number(range), "d").toDate();
        console.log(`Filtering transactions from date: ${fromDate}`);

        const transaction = await transactionModel.find({
            date: { $gt: fromDate },
            userid: req.body.userid
        });

        console.log(`This is the transaction result:`, transaction);

        res.status(200).json(transaction);
    } catch (error) {
        console.log("Error:", error);
        res.status(404).json({ error });
    }
};


export {add_transaction,get_transaction};

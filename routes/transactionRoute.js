import express from 'express'
import { add_transaction, get_transaction } from '../controllers/transactionController.js';

const router = express.Router();

router.post('/get_history',get_transaction);
router.post('/add_transaction',add_transaction);
export default router;
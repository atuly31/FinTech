import express from "express";
import {login_controller,register_controller} from '../controllers/userController.js';



const router = express.Router();

router.post("/login", login_controller);
router.post("/register", register_controller);

export default router;

import express from "express";
import { login, register, createUser } from "../controllers/auth.js";


const router = express.Router();


router.post("/register",register)
router.post("/login",login)

// CREATE User
router.post("/register", createUser);

export default router
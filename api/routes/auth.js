import express from "express";
import { login, register, createUser, logout } from "../controllers/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.delete("/logout", logout);

// CREATE User
router.post("/register", createUser);

export default router;

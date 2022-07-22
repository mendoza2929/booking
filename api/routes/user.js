import express from "express";
import {
  createUser,
  deleteUser,
  getAllUser,
  getUser,
  updateUser,
} from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../util/verifyToken.js";

const router = express.Router();

router.get("/checkauthentication", verifyToken, (req, res, next) => {
  res.send("hello user you are logged in");
});

router.get("/checkuser/:id", verifyUser, (req, res, next) => {
  res.send("hello user you are logged in and you can delete");
});

router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
  res.send("hello admin you are logged in and you can delete all account");
});

//update
router.put("/:id", verifyUser, updateUser);

//delete

router.delete("/:id", verifyUser, deleteUser);

//get

router.get("/:id", verifyUser, getUser);

//get all

router.get("/", verifyAdmin, getAllUser);

//client CRUD

// CREATE User
router.post("/register", createUser);

export default router;

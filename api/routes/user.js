import express from "express";
import {
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
  

//updateProfile

// router.post("/profile", verifyUser, updateProfile);
//delete

router.delete("/:id", verifyUser, deleteUser);

//get

router.get("/:id", verifyUser, getUser);

//get all

router.get("/", verifyAdmin, getAllUser);

export default router;
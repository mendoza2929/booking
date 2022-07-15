import express from "express";
import { deleteUser, getAllUser, getUser, updateUser } from "../controllers/user.js";
import { verifyToken, verifyUser } from "../util/verifyToken.js";


const router = express.Router();

router.get("/checkauthentication",verifyToken,(req,res,next)=>{
    res.send("hello user you are logged in")
})

router.get("/checkuser/:id",verifyUser,(req,res,next)=>{
    res.send("hello user you are logged in and you can delete")
})

router.get("/checkadmin/:id",verifyUser,(req,res,next)=>{
    res.send("hello admin you are logged in and you can delete all account")
})


 
//update
router.put('/:id', updateUser)

//delete

router.delete('/:id',deleteUser)

//get

router.get('/:id', getUser)

//get all

router.get('/', getAllUser)



export default router
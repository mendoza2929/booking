import express from "express";
import { createRoom, deleteRoom, getAllRoom, getRoom, updateRoom } from "../controllers/room.js";
import { verifyAdmin } from "../util/verifyToken.js";


const router = express.Router();


//create
router.post('/:hotelid', verifyAdmin, createRoom)
//update
router.put('/:id', verifyAdmin, updateRoom)

//delete

router.delete('/:id/:hotelid', verifyAdmin, deleteRoom)

//get

router.get('/:id', getRoom)

//get all

router.get('/', getAllRoom)


export default router
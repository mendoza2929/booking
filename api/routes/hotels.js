import express from "express";
import { createHotel, deleteHotel, getAllHotel, getHotel, updateHotel } from "../controllers/hotel.js";
import Hotel from "../models/Hotel.js";
// import { createError } from "../util/error.js";


const router = express.Router();

//create
router.post('/', createHotel)
//update
router.put('/:id', updateHotel)

//delete

router.delete('/:id',deleteHotel)

//get

router.get('/:id', getHotel)

//get all

router.get('/', getAllHotel)

export default router
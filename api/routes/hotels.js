import express from "express";
import { countByCity, countByType, createHotel, deleteHotel, getAllHotel, getHotel, getHotelRooms, updateHotel } from "../controllers/hotel.js";
import Hotel from "../models/Hotel.js";
import {verifyAdmin  } from "../util/verifyToken.js";
// import { createError } from "../util/error.js";


const router = express.Router();

//create
router.post('/', verifyAdmin, createHotel)
//update
router.put('/:id', verifyAdmin, updateHotel)

//delete

router.delete('/:id', verifyAdmin, deleteHotel)

//get

router.get('/find/:id', getHotel)

//get all

router.get('/', getAllHotel)

router.get('/countByCity', countByCity)

router.get('/countByType', countByType)

router.get('/room/:id', getHotelRooms)

export default router
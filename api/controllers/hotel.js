import Hotel from "../models/Hotel.js"
import Room from ".././models/Room.js"

export const createHotel = async (req,res,next) => {
    const newHotel = new Hotel(req.body)
    try{
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)
    }catch(err){
       next(err)
    }
}

export const updateHotel = async (req,res,next) => {
    try{
        const updateHotel = await Hotel.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updateHotel)
    }catch(err){
       next(err)
    }
}

export const deleteHotel = async (req,res,next) => {
    try{
        await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json("Hotel has been Deleted")
    }catch(err){
       next(err)
    }
}

export const getHotel = async (req,res,next) => {
    try{
        const hotel = await Hotel.findById(req.params.id)
            res.status(200).json(hotel)
        }catch(err){
       next(err)
    }
}

export const getAllHotel = async (req,res,next) => {
    const {min,max, ...others}= req.query
    try{
        const hotels = await Hotel.find({...others,cheapestPrice:{$gt:min | 1  ,$lt:max || 1500}}).limit(req.query.limit)
            res.status(200).json(hotels)
        }catch(err){
       next(err)
    }
}

export const countByCity = async (req,res,next) => {
    const cities = req.query.cities.split(",")
    try{
        const list = await Promise.all(cities.map(city=>{
            return Hotel.countDocuments({city:city})
        }))
            res.status(200).json(list)
        }catch(err){
       next(err)
    }
}

export const countByType = async (req,res,next) => {
    try{
    const familyCounts = await Hotel.countDocuments({type: 'family'})
    const appartmentCounts = await Hotel.countDocuments({type: 'appartment'})
    const hotelCounts =await  Hotel.countDocuments({type: 'hotel'})
    const officeCounts = await Hotel.countDocuments({type: 'office'})
    const condoCounts = await Hotel.countDocuments({type: 'condo'})
    
            res.status(200).json([
                {type:"Family", count: familyCounts},
                {type:"Appartment", count: appartmentCounts},
                {type:"Hotel", count: hotelCounts},
                {type:"Office", count: officeCounts},
                {type:"Condo", count: condoCounts},
            ])
        }catch(err){
       next(err)
    }
}


export const getHotelRooms = async (req,res,next)=>{
    try{
        const hotel = await Hotel.findById(req.params.id)
        const list = await Promise.all(hotel.rooms.map(room=>{
            return Room.findById(room)
        }))
        res.status(200).json(list)
    }catch(err){
        next(err)
    }
}
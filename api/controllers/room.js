import Room from ".././models/Room.js";
import Hotel from ".././models/Hotel.js";
import { createError } from "../util/error.js";

export const createRoom = async (req, res, next) => {
  const hotelId = req.params.hotelid;
  const newRoom = new Room(req.body);

  try {
    const savedRoom = await newRoom.save();
    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $push: { rooms: savedRoom._id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json(savedRoom);
  } catch (err) {
    next(err);
  }
};

export const updateRoom = async (req, res, next) => {
  try {
    const updateRoom = await Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updateRoom);
  } catch (err) {
    next(err);
  }
};

export const updateRoomAvailability = async (req, res, next) => {
  try {
    await Room.updateOne(
      { "roomNumber._id": req.params.id },
      {
        $push: {
          "roomNumber.$.unavailableDates": req.body.value,
        },
      }
    );
    res.status(200).json("Room Status has been updated.");
  } catch (err) {
    next(err);
  }
};

export const deleteRoom = async (req, res, next) => {
    try {
      //   const roomId = req.params.id;
      const room = await Room.findById(req.params.id);
      const hotel = await Hotel.findById(req.params.hotelId);
      console.log("roomId", room, "hotelID", hotel);
      await room.remove();
      hotel.rooms.splice(
        hotel.rooms.findIndex((a) => a.room_id === room.id),
        1
      );
    } catch (err) {
      next(err);
    }

    // try {
    //   await Room.findByIdAndDelete(req.params.id);
    //   res.status(200).json("Room has been Deleted");
    // } catch (err) {
    //   next(err);
    // }
//   try {
//     await Room.findByIdAndDelete(roomId);
//     try {
//       await Room.findByIdAndUpdate(roomId, {
//         $pull: { rooms: req.params.id },
//       });
//     } catch (err) {
//       next(err);
//     }
//     res.status(200).json("Room has been Deleted");
//   } catch (err) {
//     next(err);
//   }
};

export const getRoom = async (req, res, next) => {
  try {
    const room = await Room.findById(req.params.id);
    res.status(200).json(room);
  } catch (err) {
    next(err);
  }
};

export const getAllRoom = async (req, res, next) => {
  try {
    const rooms = await Room.find();
    res.status(200).json(rooms);
  } catch (err) {
    next(err);
  }
};

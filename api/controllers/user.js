import User from "../models/User.js";
import bcrypt from "bcryptjs";
// const jwt = require("jsonwebtoken");
const saltRounds = 10;

export const updateUser = async (req, res, next) => {
  console.log("request", req.body.password);
  const hashedPwd = await bcrypt.hash(req.body.password, saltRounds);
  try {
    const updateUser = await User.findByIdAndUpdate(
      req.params.id,
      { password: hashedPwd },
      { new: true }
    );
    res.status(200).json(updateUser);
  } catch (err) {
    next(err);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been Deleted");
  } catch (err) {
    next(err);
  }
};

export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

export const getAllUser = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};

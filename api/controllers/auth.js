import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { createError } from "../util/error.js";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
  try {
    const { username, email, password, confirmPassword } = req.body;
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    // console.log("Sample /Register Create User");
    // console.log("Password",req.body);
    const user = await User.findOne({ email });
    console.log("user", user);
    if (user) { 
      return res.status(400).send("User already exists");
    } else if (!username || !email || !password || !confirmPassword) {
      res.status(400).send("Something missing");
    } else if (password !== confirmPassword) {
      res.status(400).send("Passwords do not match!");
    } else {
      const newUSer = new User({
        ...req.body,
        password: hash,
      });

      await newUSer.save();
      res.status(200).send("User has been Created");
    }


  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return next(createError(404, "User not found"));

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (isPasswordCorrect) {
      const userSession = { email: user.email }; // creating user session to keep user loggedin also on refresh
      console.log("User Session", userSession);
      req.session.user = userSession; // attach user session to session object from express-session

      console.log("Request Session User", req.session);

      // return res
      //   .status(200)
      //   .json({ msg: "You have logged in successfully", userSession }); // attach user session id to the response. It will be transfer in the cookies
    }

    if (!isPasswordCorrect)
      return next(createError(400, "Wrong password or email"));

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT
    );

    const { password, isAdmin, ...otherDetails } = user._doc;
    res
      .cookie("access_token", token, {
        maxAge: 360000,
        httpOnly: true,
      })
      .status(200)
      .json({ details: { ...otherDetails }, isAdmin });
  } catch (err) {
    next(err);
  }
};

export const logout = async (req, res, next) => {
  console.log("My Session", req.session);
  req.session.destroy((error) => {
    if (error) throw error;

    res.clearCookie("session-id"); // cleaning the cookies from the user session
    res.status(200).send("Logout Success");
  });
};

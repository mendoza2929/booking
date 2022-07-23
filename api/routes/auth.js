import express from "express";
import { login, register, createUser } from "../controllers/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/logout", (req, res) => {
  res.clearCookie("access_token");
  res.redirect("/");
  console.log("Sesion", res.session);
  console.log("Token", res.token);
  console.log("Response", res);
  // if (req.session) {
  //   req.session.destroy((err) => {
  //     if (err) {
  //       res.status(400).send("Unable to logout");
  //     } else {
  //       res
  //         .clearCookie("access_token")
  //         .status(200)
  //         .json({ message: "Successfully Logout" });
  //       res.redirect("/");
  //     }
  //   });
  // } else {
  //   console.log("No session");
  //   res.end();
  // }
});

// CREATE User
router.post("/register", createUser);

export default router;

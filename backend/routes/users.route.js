const express = require("express");
const { UserModel } = require("../models/users.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { authentication } = require("../middlewares/auth.middleware");
require("dotenv").config();

const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
  const { name, email, gender, password } = req.body;
  try {
    bcrypt.hash(password, 4, async (err, hash) => {
      if (err) {
        console.log(err);
        res.send("something went wrong");
      } else {
        const user = new UserModel({ name, email, gender, password: hash });
        await user.save();
        res.send("user registered");
      }
    });
  } catch (err) {
    console.log(err);
    res.send("error in registering");
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await UserModel.find({ email });
    if (user.length > 0) {
      bcrypt.compare(password, user[0].password, async (err, result) => {
        if (err) {
          console.log(err);
          res.send("something went wrong");
        } else if (result) {
          const token = jwt.sign({ foo: "bar" }, process.env.key);
          res.send({msg:"login successfull",token});
        } else {
          res.send("wrong password");
        }
      });
    } else {
      res.send("user not found");
    }
  } catch (err) {
    console.log(err);
    res.send("error in sign in");
  }
});

module.exports = {
  userRouter,
};

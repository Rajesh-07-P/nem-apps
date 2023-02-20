const jwt = require("jsonwebtoken");
require("dotenv").config();

const authentication = async (req, res, next) => {
  const token = req.headers.auth;
  try {
    jwt.verify(token, process.env.key, async (err, decoded) => {
      if (err) {
        console.log(err);
        res.send("please login");
      } else if (decoded) {
        next();
      }
    });
  } catch (err) {
    console.log(err);
    res.send("something went wrong");
  }
};


module.exports={
    authentication
}
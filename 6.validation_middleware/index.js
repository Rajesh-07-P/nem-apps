const express = require("express");

const app = express();

const dataValidation = (req, res, next) => {
  if (
    req.body.ID != undefined &&
    req.body.Name != undefined &&
    req.body.Rating != undefined &&
    req.body.Description != undefined &&
    req.body.Genre != undefined &&
    req.body.Cast != undefined
  ) {
    if (
      typeof req.body.ID == "number" &&
      typeof req.body.Name == "string" &&
      typeof req.body.Rating == "number" &&
      typeof req.body.Description == "string" &&
      typeof req.body.Genre == "string" &&
      Array.isArray(req.body.Cast)
    ) {
      let c = 0;
      for (let i = 0; i < req.body.Cast.length; i++) {
        if (typeof req.body.Cast[i] != "string") {
          c++;
          break;
        }
      }
      if (c > 0) {
        res.sendStatus(400);
      } else {
        next();
      }
    } else {
      res.sendStatus(400);
    }
  } else {
    res.sendStatus(400);
  }
};

app.use(express.json());
app.use(dataValidation);

app.post("/movies", (req, res) => {
  console.log(req.body);
  res.end("Data is correct");
});

app.listen(3500, () => {
  console.log("server started at port 3500");
});

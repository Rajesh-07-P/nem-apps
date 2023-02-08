const express = require("express");
const { Moviemodel } = require("../db");

const moviesRouter = express.Router();


//samplerequest --->   localhost:3500/movies/?releaseYear=2014&sort=rating&order=dsc&limit=3  
moviesRouter.get("/", async (req, res) => {
  try {
      const obj = {
        [req.query.sort]: req.query.order == "asc" ? 1 : -1,
      };
    console.log(obj);
    let data = await Moviemodel.find(req.query).sort(obj).limit(req.query.limit);
    res.send(data);
  } catch (err) {
    console.log(err);
    res.send("Something wen wrong");
  }
});

moviesRouter.get("/search", async (req, res) => {
  console.log(req.query.q);
  try {
    //do db.movies.createIndex({title:"text"}) in mongo shell before next step
    let data = await Moviemodel.find({ $text: { $search: `${req.query.q}` } });
    res.send(data);
  } catch (err) {
    console.log(err);
    res.send("Something wen wrong");
  }
});

moviesRouter.post("/post", (req, res) => {
  Moviemodel.insertMany(req.body).then(() => {
    console.log("added to db");
  });
  res.end("posted");
});

module.exports = { moviesRouter };

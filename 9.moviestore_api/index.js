const express = require("express");
const { Moviemodel } = require("./db");
const { moviesRouter } = require("./routes/movies.route");

const app = express();

app.use(express.json());
app.get("/", (req, res) => {
    res.end("Home Page");
});

app.use("/movies",moviesRouter);

app.listen(3500, () => {
  console.log("server started at port 3500");
});

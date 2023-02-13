const express = require("express");
const { connection } = require("./db");
require("dotenv").config();

const { todoRouter } = require("./routes/todo.route");

const app = express();

app.use(express.json());
app.get("/", (req, res) => {
  res.send("home page");
});
app.use("/todos", todoRouter);

app.listen(process.env.port, async () => {
  try {
    connection
    console.log("connected to db");
} catch (err) {
    console.log("err");
    console.log(err);
}
console.log(`server started at port ${process.env.port}`);
});

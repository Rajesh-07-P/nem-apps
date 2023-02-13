const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  task: String,
  status: Boolean,
});

const Todomodel = mongoose.model("todo", todoSchema);

module.exports = { Todomodel };

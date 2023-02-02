const express = require("express");

const fs = require("fs");

const cors=require("cors");


const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  const data = fs.readFileSync("./db.json", "utf-8");

  const parsed_data = JSON.parse(data);

  // console.log(parsed_data);

  res.send(parsed_data);
});

app.post("/", (req, res) => {
  const addTodo = req.body;

  console.log(addTodo);

  const data = fs.readFileSync("./db.json", "utf-8");

  const parsed_data = JSON.parse(data);

  const todo={
    id:Math.random(),
    status:false
  }

  todo.task=addTodo.todo;

  console.log(parsed_data);

  parsed_data.todos.push(todo);

  try {
    fs.writeFileSync("./db.json", JSON.stringify(parsed_data));
    res.end("Data is added");
  } catch (err) {
    console.log(err);
    res.end("Data is not-added");
  }
});
app.put("/", (req, res) => {

    const id=req.body;

    console.log(id,"id");

  const data = fs.readFileSync("./db.json", "utf-8");

  const parsed_data = JSON.parse(data);

  const filteredData=parsed_data.todos.map((todo)=>{
    if(id._id==todo.id){
        todo.status=!todo.status
    }
    return todo;
  })

  parsed_data.todos=filteredData;

    try {
      fs.writeFileSync("./db.json", JSON.stringify(parsed_data));
      res.end("status changed");
    } catch (err) {
      console.log(err);
      res.end("Status not changed");
    }

});
app.delete("/", (req, res) => {
       const id = req.body;

       console.log(id,"delete");

       const data = fs.readFileSync("./db.json", "utf-8");

       const parsed_data = JSON.parse(data);

       const filteredData = parsed_data.todos.filter((todo) => {
         return id._id != todo.id;
       });

       parsed_data.todos = filteredData;

       try {
         fs.writeFileSync("./db.json", JSON.stringify(parsed_data));
         res.end("Data is deleted");
       } catch (err) {
         console.log(err);
         res.end("Data is not-deleted");
       }
});

app.listen(4500, () => {
  console.log("server started at port 4500");
});

import { Box, Button, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import axios from "axios";
import TodoItem from "./TodoItem";
import { useEffect } from "react";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const gettodos = async () => {
    let res = await fetch("http://localhost:4500/");
    let data = await res.json();
    console.log(data);
    setTodos(data.todos);
  };

  useEffect(() => {
    gettodos();
  }, []);

  const handleAdd = async() => {
    await axios.post("http://localhost:4500/", {todo:todo} );
    gettodos();
    setTodo("");
  };
  const handleChange = (e) => {
    setTodo(e.target.value);

  };

  return (
    <>
      <Box mt="100px">
        <Input
          w="200px"
          mr="10px"
          border="1px solid grey"
          value={todo}
          onChange={handleChange}
        />
        <Button onClick={handleAdd}>Add</Button>
      </Box>
      {todos.map((todo) => {
        return <TodoItem {...todo} key={todo.id} gettodos={gettodos}/>;
      })}
    </>
  );
};

export default Todo;

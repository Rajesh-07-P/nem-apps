import { Box, Button, Center, Heading, HStack } from "@chakra-ui/react";
import axios from "axios";
import React from "react";

const TodoItem = ({ id, status, task, gettodos }) => {

  const handleStatus=async(_id)=>{
    await axios.put("http://localhost:4500/",{_id:_id});
    gettodos();
  }
  const handleDelete=async(_id)=>{
    await axios.delete("http://localhost:4500/",{data:{_id:_id}});
    gettodos();
  }
  return (
    <Center mt="10px">
      <HStack gap="20px">
        <Heading size="md" fontWeight="semibold">
          {task}
        </Heading>
        <Button onClick={()=>handleStatus(id)} bgColor={status?"green":"brown"} color="white">{status?"Completed":"InComplete"}</Button>
        <Button onClick={()=>handleDelete(id)}>Delete</Button>
      </HStack>
    </Center>
  );
};

export default TodoItem;

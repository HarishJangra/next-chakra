'use client'
import Image from "next/image";
import { useState } from 'react'
import { Box, Flex, Button, Text, Input } from '@chakra-ui/react'
export default function Home() {

  const [todos, settodo] = useState<any>([])
  const [inputTodo, setInputTodo] = useState<string>()
  const addTodo = () => {
    if (inputTodo.trim()) {
      settodo([...todos, { text: inputTodo, completed: false }])
      setInputTodo("")
    }
  }

  return (
    <Box p={10}>
      <Input placeholder="enter todo" value={inputTodo} onChange={(e:any) => setInputTodo(e.target.value)} />
      <Button onClick={addTodo}>
        Add todo
      </Button>

      <Box mt={10}>
      {
        todos?.map((todo: any, i: number) => {
          return (
            <Box key={i+"todo"}>
              {todo?.text}
            </Box>
          )
        })
      }
      </Box>
    </Box>
  );
}

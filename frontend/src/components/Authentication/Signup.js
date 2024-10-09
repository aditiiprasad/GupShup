import React, { useState } from 'react'
import { Stack, HStack, VStack, FormControl, FormLabel, Input } from '@chakra-ui/react'

const Signup = () => {


const [name, setName] = useState();
const [email, setEmail] = useState();
const [confirmpassword, setConfirmpassword] = useState();
const [password, setPassword] = useState();
const [pic, setPic] = useState();


  return (
    <VStack spacing='5px'>
      <FormControl>
        <FormLabel>
            <Input
            placeholder='Enter your name'
            onChange={(e) =>setName(e.target.value) }
            />
            
        </FormLabel>
      </FormControl>
    </VStack>
  )
}

export default Signup

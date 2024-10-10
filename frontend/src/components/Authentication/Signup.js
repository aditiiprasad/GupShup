import React, { useState } from 'react'
import { Stack, HStack, VStack, FormControl, FormLabel, Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react'

const Signup = () => {

const [show, setShow] = useState(false);
const [name, setName] = useState();
const [email, setEmail] = useState();
const [confirmpassword, setConfirmpassword] = useState();
const [password, setPassword] = useState();
const [pic, setPic] = useState();
const [loading, setLoading] = useState(false);

const handleClick = () => setShow(!show);

const postDetails = (pics) => {

setLoading(true);
if (pic ===  undefined){
  //https://api.cloudinary.com/v1_1/dtczdc7re/image/upload 
}
}

const submitHandler = () => {

}

  return (
    <VStack spacing='5px' >
         <FormControl id='first-name' isRequired>
          <FormLabel>Name</FormLabel>
            <Input
            borderColor={"red.600"}
            placeholder='Enter your name'
            onChange={(e) =>setName(e.target.value) }
            />
         </FormControl>

         <FormControl id='email' isRequired>
          <FormLabel>Email</FormLabel>
            <Input
            borderColor={"red.600"}
            placeholder='Enter your Email'
            onChange={(e) =>setEmail(e.target.value) }
            />
         </FormControl>

         <FormControl id='password' isRequired>
          <FormLabel>Password</FormLabel>
            <InputGroup>
             <Input
              borderColor={"red.600"}
              type={show ? "text": "password"}
              placeholder='Enter your Password'
              onChange={(e) =>setPassword(e.target.value) }
             />
             <InputRightElement width="4.5rem">
              <Button color={"red.400"} h="1.75rem" size="sm" onClick={handleClick}>
              {show? "Hide" : "Show"}
              </Button>          
             </InputRightElement>  
            </InputGroup>    
         </FormControl>

         <FormControl id='password' isRequired>
          <FormLabel>Confirm Password</FormLabel>
            <InputGroup>
              <Input
              borderColor={"red.600"}
              type={show ? "text": "password"}
              placeholder='Confirm Password'
              onChange={(e) =>setConfirmpassword(e.target.value) }
              />
             <InputRightElement width="4.5rem">
              <Button color={"red.400"} h="1.75rem" size="sm" onClick={handleClick}>
              {show? "Hide" : "Show"}
              </Button>            
             </InputRightElement>  
            </InputGroup>
          </FormControl>
          
          <FormControl id="pic">
            <FormLabel>Upload your Picture</FormLabel>
            <Input
             borderColor={"red.600"}
             type="file"
             p={1.5}
             accept="image/*"
             onChange={(e) => postDetails(e.target.files[0])}
             />
          </FormControl>

          <Button
           colorScheme="red"
           width="100%"
           style={{ marginTop:15 }}
           onClick={submitHandler}
           >
            Sign Up
           </Button>


    </VStack>
  )
}

export default Signup

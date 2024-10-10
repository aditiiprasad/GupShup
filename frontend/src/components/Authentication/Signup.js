import React, { useState } from 'react'
import { Stack, HStack, VStack, FormControl, FormLabel, Input, InputGroup, InputRightElement, Button, position } from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'
import axios from "axios";
import { useNavigate} from 'react-router-dom';


const Signup = () => {

const [show, setShow] = useState(false);
const [name, setName] = useState();
const [email, setEmail] = useState();
const [confirmpassword, setConfirmpassword] = useState();
const [password, setPassword] = useState();
const [pic, setPic] = useState();
const [loading, setLoading] = useState(false);
const toast = useToast();
const navigate = useNavigate();

const handleClick = () => setShow(!show);

 

const postDetails = (pics) => {
  setLoading(true);
  if (pics === undefined) {
    toast({
      title: 'Please Select an Image!',
      status: 'warning',
      duration: 5000,
      isClosable: true,
      position: 'bottom',
    });
    setLoading(false);
    return;
  }
  console.log(pics);
  if (pics.type === 'image/jpeg' || pics.type === 'image/png') {
    const data = new FormData();
    data.append('file', pics);
    data.append('upload_preset', 'chat_app');
    data.append('cloud_name', 'dtczdc7re');
    fetch('https://api.cloudinary.com/v1_1/dtczdc7re/image/upload', {
      method: 'post',
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setPic(data.url.toString());
        console.log(data.url.toString());
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  } else {
    toast({
      title: 'Please Select an Image!',
      status: 'warning',
      duration: 5000,
      isClosable: true,
      position: 'bottom',
    });
    setLoading(false);
    return;
  }
};

const submitHandler = async() => {
   setLoading(true);
   if (!name ||!email || !password || !confirmpassword){
    toast({
      title: "Please Fill all the Feilds",
      status: "warning",
      duration: 5000,
      isClosable: true,
      position: "bottom",
    });
    setLoading(false);
    return;
   }
   if (password !== confirmpassword) {
    toast({
      title: "Passwords Do Not Match",
      status: "warning",
      duration: 5000,
      isClosable: true,
      position: "bottom",
    });
    return;
  }
  try{
    const config = {
      headers: {
        "Content-type":"application/json",
      },
    };

    const {data} = await axios.post("/api/user" , 
      {name , email, password,pic},
      config
    );
    toast({
      title: "Registration Successful",
      status: "success",
      duration: 5000,
      isClosable: true,
      position: "bottom",
    });
    localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
      navigate("/chats");
  }catch(error){
    toast({
      title: "Error Occured!",
      description: error.response.data.message,
      status: "error",
      duration: 5000,
      isClosable: true,
      position: "bottom",
    });
    setLoading(false);
  }
};


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
           isLoading={loading}
           >
            Sign Up
           </Button>


    </VStack>
  )
}

export default Signup

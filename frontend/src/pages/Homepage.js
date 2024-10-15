import { 
    Container ,
    Box,
    Text,
    Flex, 
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    Tabs,
    Image} from '@chakra-ui/react';
import React from 'react'
import { useEffect } from "react";

import Login from '../components/Authentication/Login';
import Signup from '../components/Authentication/Signup';
import logo from "../images/logo.png";
import { useNavigate } from 'react-router-dom';

const Homepage = () => {

  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) navigate("/chats");
  }, [navigate]);

  return <Container>

  <Box
  
  p={3}
  bg={"black"}
  w="100%"
  m="40px 0 15px 0"
  borderRadius="lg"
  borderWidth="1px"
  borderColor={"black"}
  textColor={"white"}
  
  >
    <Flex align="center" justify="space-between">
    <Image src={logo} alt="GupShup Logo" boxSize="90px" />
    <Text fontSize='4xl' fontFamily="Work sans" color="red" fontWeight="semibold">
        Gup Shup
    </Text>
    </Flex>
  </Box>

  <Box bg="black" w="100%" p={4} borderRadius="lg" borderWidth="1px" borderColor={"red"} color={"white"}>

  <Tabs variant='soft-rounded' colorScheme='red'>
  <TabList mb='1em'>
    <Tab width="50%">Login</Tab>
    <Tab width="50%">Sign Up</Tab>
  </TabList>
  <TabPanels>
    <TabPanel> <Login/> </TabPanel>
    <TabPanel> <Signup/> </TabPanel>
      
  </TabPanels>
</Tabs>

  </Box>
  </Container>;
};

export default Homepage

import { 
    Container ,
    Box,
    Text,
    Flex, 
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    Tabs} from '@chakra-ui/react';
import React from 'react'
import Login from '../components/Authentication/Login';
import Signup from '../components/Authentication/Signup';


const Homepage = () => {
  return <Container>

  <Box
  d='flex'
  justifyContent='center'
  p={3}
  bg={"black"}
  w="100%"
  m="40px 0 15px 0"
  borderRadius="lg"
  borderWidth="1px"
  borderColor={"black"}
  textColor={"white"}
  
  >
    <Text fontSize='4xl' fontFamily="Work sans" color="red">
        Gup Shup
    </Text>
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

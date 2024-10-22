import React from 'react' ;
import { useState } from "react";
import { Box, Button, Text, Tooltip , Image, Menu, MenuButton } from '@chakra-ui/react';
import logo from "../../images/logo.png";


const SideDrawer = () => {

  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState(false);


  return (
    <>
       
<Box d="flex"
        justifyContent="space-between"
        alignItems="center"
        bg="black"
        w="100%"
        p="5px 10px 5px 10px"  
        rounded="2xl"       
        background="rgba(201, 73, 73, 0.2)" // Very translucent red background
        display="flex"
        >
  <Tooltip  hasArrow placement="bottom-end">
 
 <Button variant="ghost"
         colorScheme="red"
         _hover={{
          bg: "red.500", // Background color on hover
          color: "white", // Text color on hover
          opacity: 0.8, // Make it translucent on hover
        }}
        _focus={{ boxShadow: "none" }} 
         >
  
 <i className="fas fa-search"></i>
            <Text d={{ base: "none", md: "flex" }} px={4}>
              Search User
            </Text>

  </Button> 

  </Tooltip>

  <Box display="flex" alignItems="center"  bg="transparent">
      
      <Image
        src={logo} alt="GupShup Logo"  
        boxSize="55px" 
        mr={6}
       
      />
      
      <Text fontSize='4xl' fontFamily="Work sans" color="red" fontWeight="medium">
        GupShup
      </Text>
    
  </Box>

  <Menu>

    <MenuButton  p={1}>

    </MenuButton>

  </Menu>

</Box>


    </>
  )
}

export default SideDrawer

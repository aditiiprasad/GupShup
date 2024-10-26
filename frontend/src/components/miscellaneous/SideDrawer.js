import React from 'react' ;
import { useState } from "react";
import { Box, Button, Text, Tooltip , Image, Menu, MenuButton, MenuList, Avatar, MenuItem, MenuDivider, Drawer ,DrawerBody,
  DrawerContent, DrawerHeader, DrawerOverlay,Input} from '@chakra-ui/react';
import logo from "../../images/logo.png";
import { BellIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { ChatState } from '../../Context/ChatProvider';
import ProfileModal from './ProfileModal';
import { useNavigate } from 'react-router-dom';
import { useDisclosure } from "@chakra-ui/hooks";
import { useToast } from '@chakra-ui/react'
import axios from 'axios';
import ChatLoading from '../ChatLoading';
import UserListItem from '../UserAvatar/UserListItem';








const SideDrawer = () => {

  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState(false);

  const {user} = ChatState();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast = useToast();
  
  const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    navigate("/"); 
  };

  const handleSearch =  async() => {

    if (!search) {
      toast({
        title: "Please Enter something in search",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top-left",
      });
      return;
    }
    try {
      setLoading(true);

      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      const {data} = await axios.get('/api/user?search=${search}', config);

      setLoading(false);
      setSearchResult(data);

    } catch (error) {
      toast({
        title: "Error Occured!",
        description: "Failed to Load the Search Results",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  };


  const accessChat = (userId) => {

  };
  return (
         <>
       
<Box d="flex"
        justifyContent="space-between"
        alignItems="center"
        bg="black"
        w="100%"
        p="5px 10px 5px 10px"  
        rounded="2xl"       
        background="rgba(201, 73, 73, 0.2)" 
        display="flex"
        >
  <Tooltip label="Search User" hasArrow placement="bottom-end">
 
 <Button variant="ghost"
         colorScheme="red"
         _hover={{
          bg: "red.500", 
          color: "white", 
          opacity: 0.8, 

        }}
        _focus={{ boxShadow: "none" }} 
        onClick={onOpen}
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
  <Box display="flex" alignItems="center" gap={3}>
  <Menu>

    <MenuButton  p={1}>
         <BellIcon fontSize="4xl" m={1} color="red"/>
    </MenuButton>
    {/* <MenuList>
      
    </MenuList>   */}
  </Menu>
  <Menu >

  <MenuButton  as={Button}  rightIcon={<ChevronDownIcon />} variant="ghost"

         
         _hover={{
          bg: "red", 
          color: "white", 
          opacity: 0.8, 
        }}
        _focus={{ boxShadow: "none" }}
         backgroundColor="transparent" 
         color="red"
         >
         <Avatar size="sm"
                cursor="pointer"
                name={user.name}
                src={user.pic}
                />
          
  </MenuButton>

   <MenuList bg="red.600" color="white" borderColor="red.500" _focus={{
                bg: "red.600",
              }}
              >

     <ProfileModal user={user}>

    <MenuItem _hover={{ bg: "red.400" }} backgroundColor="red.500"color="white"  fontWeight="medium">My Profile</MenuItem>
     
    </ProfileModal>

    <MenuItem _hover={{ bg: "red.400" }} 
              backgroundColor="red.500"
              color="white" 
              fontWeight="medium" 
              onClick={logoutHandler}
              >Logout</MenuItem>
   </MenuList>
  </Menu>
  </Box>
</Box>


  <Drawer placement='left' onClose={onClose} isOpen={isOpen}>

<DrawerOverlay/>
<DrawerContent bg="black" border="1px " borderRightColor="red" >
  <DrawerHeader borderBottomWidth="1px" fontWeight="bold"  color="red.800" >Search User</DrawerHeader>
  <DrawerBody>
  <Box display="flex" pb={2}>
  <Input
                placeholder="Search by name or email"
                mr={2}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                bg="black"
                color="white"
                borderColor="red.500"
                _placeholder={{ color: "gray.400" }}
               
                _focus={{ borderColor: "white" }}
 
 
              />
  <Button colorScheme="red"  onClick={handleSearch}>Go</Button>           

  </Box>
  {loading ? (<ChatLoading />  ): (searchResult?.map(user => (
    <UserListItem 
    key={user._id}
                 
                  handleFunction={() => accessChat(user._id)}
    />
   
  )) )}
</DrawerBody> 
</DrawerContent>

  </Drawer> 
    </>
  )
}

export default SideDrawer ;

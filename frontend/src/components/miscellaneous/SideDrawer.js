import React from 'react' ;
import { useState } from "react";
import { Box, Button, Text, Tooltip , Image, Menu, MenuButton, MenuList, Avatar, MenuItem, MenuDivider, Drawer ,DrawerBody,
  DrawerContent, DrawerHeader, DrawerOverlay,} from '@chakra-ui/react';
import logo from "../../images/logo.png";
import { BellIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { ChatState } from '../../Context/ChatProvider';
import ProfileModal from './ProfileModal';
import { useNavigate } from 'react-router-dom';
import { useDisclosure } from "@chakra-ui/hooks";



const SideDrawer = () => {

  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState(false);

  const {user} = ChatState();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure()
  
  const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    navigate("/"); 
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
  <Tooltip  hasArrow placement="bottom-end">
 
 <Button variant="ghost"
         colorScheme="red"
         _hover={{
          bg: "red.500", 
          color: "white", 
          opacity: 0.8, 
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

<Drawer placement="left" onClose={onClose} isOpen={isOpen}>
<DrawerOverlay />
<DrawerContent>

<DrawerHeader borderBottomWidth="1px">
Search Users
</DrawerHeader>

</DrawerContent>

<DrawerBody >

<Box>


</Box>

</DrawerBody>

</Drawer>


    </>
  )
}

export default SideDrawer

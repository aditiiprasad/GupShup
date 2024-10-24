import React, { useEffect, useState } from 'react';
import { Box } from "@chakra-ui/react";
import axios from 'axios'
import { ChatState } from "../Context/ChatProvider";
import SideDrawer from '../components/miscellaneous/SideDrawer';
import ChatBox from '../components/ChatBox';
import MyChats from '../components/MyChats';


const ChatPage = () => {
    
  const { user } = ChatState();

  return (
    <div style={{ width: "100%" }} >
      {user && <SideDrawer  />}
      
      <Box display="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px" textColor="red.200">

      {user && <MyChats  />}

      {user && <ChatBox  />}


 
      </Box>   

    </div>
  );
};

export default ChatPage;

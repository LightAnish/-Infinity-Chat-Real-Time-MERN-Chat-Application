import { useState } from "react";
import useConversation from "../Zustand/Zustand";
import axios from "axios";



const useSendMessage =  () => {
    
    const { selectedUser,messages, setMessages } = useConversation();

    const sendMessage = async (message) => {
            try {
           const response =  await  axios.post(`http://localhost:4001/api/chats/sendMessage/${selectedUser._id}`,{ message,},{
          withCredentials: true,
        })
        const data = await response?.data?.newMessage;
        
        setMessages([...messages, data]);
        console.log(messages);
        
    } catch (error) {
        console.log(error);
    }



}

return {sendMessage};


    
}

export default useSendMessage;
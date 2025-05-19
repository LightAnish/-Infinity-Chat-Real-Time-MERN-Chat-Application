import { useState, useEffect } from "react";
import axios from "axios";
import useConversation from "../Zustand/Zustand";

const useGetMessage = () => {
   const {selectedUser,messages, setMessages} = useConversation()
   const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchMessages = async () => {
        setLoading(true)
        try {
      const response =  await axios.get(`http://localhost:4001/api/chats/getMessages/${selectedUser._id}`,{withCredentials: true})
      const data = response.data.messages;
      
      setMessages(data)
      setLoading(false)

    } catch (error) {
        console.log(error)
        setLoading(false)
    }finally{
        setLoading(false)
    }
    }

      if (selectedUser) {
        fetchMessages();
      }

  },[selectedUser])

  return {messages,loading}

}


export default useGetMessage;
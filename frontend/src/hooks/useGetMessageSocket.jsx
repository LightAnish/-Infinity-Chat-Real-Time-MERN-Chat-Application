import { useEffect } from "react";
import { useSocket } from "../contexts/Socket.context";
import useConversation from "../Zustand/Zustand";

const useGetMessageSocket = () => {
  const { socket } = useSocket();
  const { messages, setMessages } = useConversation();

  useEffect(() => {
    socket?.on("getMessage", (message) => {
      setMessages([...messages, message]);
      console.log(message);
    });
    return () => {
        socket?.off('getMessage')
    }
  }, [socket, messages, setMessages]);
};


export default useGetMessageSocket
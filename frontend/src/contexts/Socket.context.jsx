import React, { createContext, useState, useEffect, useContext } from "react";
import io from "socket.io-client";
import { useAuth } from "./Auth.context";

const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [getOnlineUsers, setGetOnlineUsers] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      const newSocket = io("http://localhost:4001", {
        query: {
          id: user?._id,
        },
      });
      setSocket(newSocket);

      newSocket.on("getOnlineUsers", (users) => {
        console.log('connected user',users);
        
        setGetOnlineUsers(users);
      });

      return () => {
        newSocket.close()
      }

    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [user]);

  return (
    <SocketContext.Provider
      value={{ socket, setSocket, getOnlineUsers }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export const useSocket = () => {
  return useContext(SocketContext);
};

import React from "react";
import { useAuth } from "../../../contexts/Auth.context";

const ChatBubble = ({message}) => {
 const {user} = useAuth()
 const sender = message?.sender === user?._id;
 

 
  
  return (
    <>
      <div key={message?._id} className={`chat ${sender? "chat-end" : "chat-start"}`}>
        <div className={`chat-bubble ${sender? "chat-bubble-success" : "chat-bubble-primary"}`}>
         {message.message}
        </div>
      </div>

    </>
  );
};

export default ChatBubble;

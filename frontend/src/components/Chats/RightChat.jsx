import React, { useEffect, useRef } from "react";
import TopRight from "./Right/TopRight";
import ChatBubble from "./Right/ChatBubble";
import SendMessage from "./Right/SendMessage";
import axios from "axios";
import useGetMessage from "../../hooks/useGetMessage";
import useGetMessageSocket from "../../hooks/useGetMessageSocket";
import { IoMdArrowRoundBack } from "react-icons/io";
import { NavLink } from "react-router-dom";


const RightChat = () => {

const {messages, loading} = useGetMessage()
useGetMessageSocket()

  const bottomRef = useRef(null)

 useEffect(()=>{
   bottomRef?.current?.scrollIntoView({behavior: "smooth"})
 },[messages])

  if(loading){
    return <div className="w-full h-screen flex justify-center items-center">
      <h1 className="text-white text-center">Loading...</h1>
    </div>
  }


  return (
    <div className="w-full h-screen">
          <div className=" w-full mt-0 min-h-[90%]  md:w-full md:h-screen bg-[#2120243f] p-4 rounded-md">
      <NavLink to={'/chats'} className="text-xl block md:hidden"><IoMdArrowRoundBack /></NavLink>
        <TopRight/>
       
       <div  className="mt-4 h-[80%] overflow-y-scroll px-6">
          {messages?.map((message)=>{
            return <ChatBubble key={message.id} message={message} />
          })}
          <div  ref={bottomRef}></div>
        </div>

        <SendMessage />
    </div>
    </div>
  );
};

export default RightChat;

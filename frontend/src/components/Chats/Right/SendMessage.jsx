import React, { useEffect, useRef } from "react";
import { IoSend } from "react-icons/io5";

import useSendMessage from "../../../hooks/useSendMessage.jsx";


const SendMessage = () => {
  const  [ message, setMessage ] = React.useState("");
  const {sendMessage} = useSendMessage();


  const handleSubmit =async (e) => {
    e.preventDefault();

   await sendMessage(message)
    setMessage("");
  }
  

  return (
    <>
    <form onSubmit={handleSubmit} method="post">
      <div className="flex items-center gap-x-6 mt-4 px-4">
            <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Type here" className="input w-full" />
           <button type="submit" className="cursor-pointer hover:text-gray-500 duration-200 "> <IoSend className="text-2xl " /></button>
      </div>
    </form>
    </>
  );
};

export default SendMessage;

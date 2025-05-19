import React from 'react'
import LeftChat from '../components/Chats/Left/LeftChat'
import RightChat from '../components/Chats/RightChat'
import useConversation from '../Zustand/Zustand'
import { useAuth } from '../contexts/Auth.context'

const ChatPage = () => {
  const {selectedUser} = useConversation()
const { user } =  useAuth()
  return (
    <div className='w-full h-screen flex gap-x-4'>
      <LeftChat/>
     <div className='w-full hidden md:block'>
       {selectedUser ? (
        <RightChat/>
      ) : (
        <div className='w-full h-screen bg-[#2120243f] p-4 rounded-md flex flex-col items-center justify-center'>
          <h1 className='text-2xl text-gray-200'>hi {user?.fullName}</h1>
          <h1 className='text-2xl text-gray-400'>Select a user to start chatting</h1>
        </div>
      )}
     </div>
    </div>
  )
}

export default ChatPage
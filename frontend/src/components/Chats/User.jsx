import React, { useEffect, useState } from 'react'
import useConversation from '../../Zustand/Zustand'
import { useSocket } from '../../contexts/Socket.context'
import { NavLink } from 'react-router-dom'

const User = ({user}) => {
  const {selectedUser,setSelectedUser } = useConversation()
  const [redirect , setRedirect] = useState(false)
     const {getOnlineUsers} = useSocket()
    
     const onlineUsers = getOnlineUsers.includes(user?._id)


      

     
     
  return (
    <>
          <NavLink to={'/user/chat'} onClick={() => setSelectedUser(user)} className="flex md:hidden badge-ghost hover:bg-gray-900   cursor-pointer px-4 py-2 rounded-md  gap-x-5 my-4 mx-4 duration-300">
          <div className={`avatar ${onlineUsers ? "avatar-online" : "avatar-offline"}  w-14`}>
            <div className=" ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
              <img src={user?.profileImage} />
            </div>
          </div>

          <div>
            <h1>{user?.fullName}</h1>
            <h3 className="text-gray-200">{user?.email}</h3>
          </div>
        </NavLink>

          <div onClick={() => setSelectedUser(user)} className={`badge-ghost hover:bg-gray-900 hidden md:flex   cursor-pointer px-4 py-2 rounded-md  gap-x-5 my-4 mx-4 duration-300`}>
          <div className={`avatar ${onlineUsers ? "avatar-online" : "avatar-offline"}  w-14`}>
            <div className=" ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
              <img src={user?.profileImage} />
            </div>
          </div>

          <div>
            <h1>{user?.fullName}</h1>
            <h3 className="text-gray-200">{user?.email}</h3>
          </div>
        </div>
    </>
  )
}

export default User
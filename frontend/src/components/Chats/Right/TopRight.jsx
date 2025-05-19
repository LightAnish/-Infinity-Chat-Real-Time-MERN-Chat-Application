import useConversation from "../../../Zustand/Zustand";
import { useSocket } from "../../../contexts/Socket.context";

const TopRight = () => {
  const { selectedUser } = useConversation();
 const {getOnlineUsers} = useSocket()

 const onlineUsers = getOnlineUsers.includes(selectedUser?._id)

  
  return (
    <>
      <div className=" bg-[#2120243f] px-4 py-2">
        <div className="flex gap-x-4 items-center">
          <div className="avatar w-12">
            <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
              <img src={selectedUser?.profileImage} />
            </div>
          </div>
          <div>
            <h1 className="text-lg">{selectedUser?.fullName || "No Name"}</h1>
            <h4 className={`${onlineUsers? "text-success" : "text-warning"}`}>{onlineUsers? "Online" : "Offline"}</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopRight;

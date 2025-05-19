import User from "../User";
import Search from "./Search";
import useGetAllUsers from "../../../hooks/useGetUsers";
import { NavLink } from "react-router-dom";

const LeftChat = () => {
  const { users } = useGetAllUsers();

  console.log(users);
  
  

  return (
    <div className="w-full md:w-1/3 h-full bg-[#2120243f] p-4 rounded-md ">
      <div className="my-4 flex justify-between items-center">
        <NavLink to={"/"} className="text-xl  font-medium">
          Chats
        </NavLink>

        <NavLink to={'/user/profile'} className="avatar w-8 cursor-pointer hover:scale-105 duration-300">
          <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
            <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
          </div>
        </NavLink>
      </div>
      {/* Search */}
      <Search />

      {/* Users */}
      <div className="mt-4  overflow-y-scroll">
        {users?.map((user) => (
          <User user={user} key={user._id} />
        ))}
      </div>
    </div>
  );
};

export default LeftChat;

import axios from "axios";
import { useEffect, useState } from "react";

const useGetAllUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getAllUsers = async () => {
      try {
        const res = await axios.get(
          "http://localhost:4001/api/users/allusers",
          { withCredentials: true }
        );
        setUsers(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllUsers();
  }, []);


  return {users}
};


export default useGetAllUsers
import axios from "axios";
import React, { createContext,useContext, useState } from "react";
import cookie from "js-cookie";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(localStorage.getItem("chatApp") ? JSON.parse(localStorage.getItem("chatApp")) : null);

  const Logout = async () => {
    try {
     let res = await axios.post("http://localhost:4001/api/auth/logout", { withCredentials: true })
    //  console.log(res.data);
     if (res.status === 200) {
        localStorage.removeItem("chatApp");
        cookie.remove("token");
        setUser(null);
      }
     
    } catch (error) {
      console.log(error);
      return error.response.data.message;
    }
  }
    
  return (
    <AuthContext.Provider value={{ user, setUser ,Logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
    return context;
};

export { AuthProvider, useAuth };
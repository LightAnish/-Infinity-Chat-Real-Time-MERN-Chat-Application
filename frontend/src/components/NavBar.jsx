import React, {  useEffect, useState } from "react";
import { useTheme } from "../contexts/Theme.context";
import { NavLink } from "react-router-dom";
import { useAuth } from "../contexts/Auth.context";


const NavBar = () => {
  const [scroll, setScroll] = useState(false);
  const {theme,setTheme} = useTheme()
  const {user,Logout} = useAuth()

  useEffect(() => {
       localStorage.setItem('theme',JSON.stringify(theme))
       document.documentElement.classList.add(theme)
       document.documentElement.classList.remove(theme === 'dark' ? "light" : "dark")
  }, [theme]);
  

useEffect(()=>{
    const handleScroll = () => {
    if (window.scrollY > 0) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  }
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
},[])


  return (
    <div className="mb-10 w-full px-12 fixed top-0 left-0 z-10 ">
      <div className={`navbar bg-transparent shadow-sm rounded-md px-4 ${scroll ? "bg-base-200  dark:bg-base-300 dark:text-white text-black duration-300 transition-all ease-in-out" : ""}`}>
        <div className="flex-1">
          <NavLink to={"/"} className=" text-xl tracking-tighter">Infinity Chat</NavLink>
        </div>
        {user ? (
               <div className="flex items-center  gap-x-6">
          <ul>
            <NavLink to={'/chats'} className="text-lg font-medium cursor-pointer hover:text-primary duration-200">Chats</NavLink>
          </ul>
          {/* theme */}
          <div>
            <label className="toggle text-base-content">
              <input
                type="checkbox"
                value={theme}
                className="theme-controller"
                onChange={() => setTheme(theme === "light" ? "dark" : "light")}
              />

              <svg
                aria-label="sun"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="12" cy="12" r="4"></circle>
                  <path d="M12 2v2"></path>
                  <path d="M12 20v2"></path>
                  <path d="m4.93 4.93 1.41 1.41"></path>
                  <path d="m17.66 17.66 1.41 1.41"></path>
                  <path d="M2 12h2"></path>
                  <path d="M20 12h2"></path>
                  <path d="m6.34 17.66-1.41 1.41"></path>
                  <path d="m19.07 4.93-1.41 1.41"></path>
                </g>
              </svg>

              <svg
                aria-label="moon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                </g>
              </svg>
            </label>
          </div>

          {/* profile */}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src= {user?.profileImage || "https://res.cloudinary.com/drkubzc4n/image/upload/v174"}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to={'/user/profile/'} className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </NavLink>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li onClick={Logout}>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
        ): (<NavLink to={'/auth/login'} className="btn btn-primary" >Login</NavLink>)}
      </div>
    </div>
  );
};

export default NavBar;

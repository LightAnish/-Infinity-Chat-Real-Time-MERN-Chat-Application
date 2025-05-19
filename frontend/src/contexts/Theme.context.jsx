import { createContext,  useContext , useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem("theme")) || "light");

    useEffect(() => {
        if(localStorage.getItem("theme") === null){
          console.log('theme not found');
          
            localStorage.setItem("theme", JSON.stringify(theme));
        }
    },[])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={theme}>{children}</div>
    </ThemeContext.Provider>
  );
}


export const useTheme = () => {
  return useContext(ThemeContext);
};
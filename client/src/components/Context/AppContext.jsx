

import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

const AppContextProvider = (props) => {
    const [userData, setUserData] = useState(() => {
        // ✅ Load userData from localStorage on initial load
        const storedUser = localStorage.getItem("userData");
        return storedUser ? JSON.parse(storedUser) : null;
    });
    const [token,setToken] = useState(()=>{
        const stoken = localStorage.getItem("token");
        return stoken ? JSON.parse(stoken) : null;
    });
 
    useEffect(() => {
        if (userData) {
            // ✅ Save userData to localStorage when it changes
            localStorage.setItem("userData", JSON.stringify(userData));
        } else {
            localStorage.removeItem("userData");
        }
    }, [userData]);

    const value = {
        userData,
        setUserData, // ✅ Fix the naming issue
        token,
        setToken,
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;

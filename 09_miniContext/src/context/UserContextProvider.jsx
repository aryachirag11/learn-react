import React from "react";
import UserContext from "./UserContext";
import { useState } from "react";

//using children is a generic standard to name the props to be passed along
const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;

/* 
    NOTE :
    1. you must wrap all your data inside the context provider, with the .Provider property of UserContext and pass your values directly to the userContext wrapper

    2. You can give access of the context provider to the main or app.jsx according to your wish and usecase
*/

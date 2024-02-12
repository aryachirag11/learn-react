import React from "react";

const UserContext = React.createContext(); // it is included with react library, no need to install externally with react, contextAPI is a part of react library

export default UserContext;

/* if you wrap all you components inside UserContext, the all your components will get access to global userContext.(it becomes a provider)
 */

import React, { createContext, useState } from "react";

export const AppContext = createContext([null]);

export default function Context({ children }) {
  const [username, setUsername] = useState("");

  const globalVal = {
    username,
    setUsername,
  };

  return (
    <AppContext.Provider value={globalVal}>{children}</AppContext.Provider>
  );
}

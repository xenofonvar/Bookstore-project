import React, { useContext, useReducer, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <AppContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

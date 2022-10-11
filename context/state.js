import { createContext, useContext , useState} from "react";

const AppContext = createContext();

export const AppWrapper = ({ children }) => {
  let sharedState = {
    //state here
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
};

export const useFormContext = () => {
  return useContext(AppContext);
};

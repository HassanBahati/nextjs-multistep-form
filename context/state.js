import { createContext, useContext } from "react";

const AppContext = createContext();

export const FormWrapper = ({ children }) => {
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

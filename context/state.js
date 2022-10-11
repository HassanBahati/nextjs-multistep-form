import { createContext, useContext } from "react";

const AppContext = createContext();

export const FormWrapper = ({ children }) => {
  let sharedState = {
    //state here
  };

  return (
    <FormContext.Provider value={sharedState}>{children}</FormContext.Provider>
  );
};

export const useFormContext = () => {
  return useContext(FormContext);
};

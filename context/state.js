import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppWrapper = ({ children }) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  let sharedState = {
    //state here
  };

  return (
    <AppContext.Provider value={{ activeStepIndex, setActiveStepIndex }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export default useAppContext;

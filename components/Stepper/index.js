import React, { useContext, useEffect } from "react";
import useFormContext from "../../context/state";

const Stepper = () => {
  const { activeStepIndex } = useFormContext();

  return (
    <div className="w-2/3 flex flex-row items-center justify-center px-32 py-16">
      <div className="stepper-item w-8 h-8 text-center font-medium border-2 rounded-full">
        1
      </div>
      <div className="flex-auto border-t-2"></div>
      <div className="stepper-item w-8 h-8 text-center font-medium border-2 rounded-full">
        2
      </div>
      <div className="flex-auto border-t-2"></div>
      <div className="stepper-item w-8 h-8 text-center font-medium border-2 rounded-full">
        3
      </div>
    </div>
  );
};

export default Stepper;

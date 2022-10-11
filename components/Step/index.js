import React, { useContext } from "react";
import { FormContext } from "../../App";
import BasicForm from "../Forms/Basic";
import Success from "../Forms/Success";
import WorkspaceForm from "../Forms/Workspace";

const Step = () => {
  const { activeStepIndex } = useContext(FormContext);
  let stepContent;
  switch (activeStepIndex) {
    case 0:
      stepContent = <BasicForm />;
      break;
    case 1:
      stepContent = <WorkspaceForm />;
      break;
    case 2:
      stepContent = <Success />;
      break;
    default:
      break;
  }

  return stepContent;
};

export default Step;

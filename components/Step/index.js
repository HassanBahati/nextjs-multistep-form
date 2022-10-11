// Step.js
import React, { useContext } from "react";
import { FormContext } from "../../App";
import { Basic, Success, Workspace } from "../Forms";
import BasicForm from "../Forms/Basic";

function Step() {
  const { activeStepIndex } = useContext(FormContext);
  let stepContent;
  switch (activeStepIndex) {
    case 0:
      stepContent = <BasicForm />;
      break;
    case 1:
      stepContent = <Workspace/>;
      break;
    case 2:
      stepContent = <Success />;
      break;
    default:
      break;
  }

  return stepContent;
}

export default Step;

import LandingView from "./LandingView";
import { useState } from "react";

const LandingController = () => {
  const [onboardingStep, setOnboardingStep] = useState<number>(0);
  const onClickHandler = () => {
    if (onboardingStep === 1) {
      setOnboardingStep(0);
    } else {
      setOnboardingStep(onboardingStep + 1);
    }
  };
  return (
    <LandingView
      onboardingStep={onboardingStep}
      onClickHandler={onClickHandler}
    />
  );
};

export default LandingController;

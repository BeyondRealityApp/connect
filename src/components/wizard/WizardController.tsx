"use client";

import { GameSetting } from "@/lib/types";
import { setGameSetting, setGameStatus } from "@/lib/features/gameSettingSlice";
import WizardView from "./WizardView";
import { useAppDispatch } from "@/lib/hooks";
import { useState } from "react";

const WizardController = () => {
  const dispatch = useAppDispatch();
  const [activeStep, setActiveStep] = useState<number>(0);

  const onContinueClick = () => {
    setActiveStep(1);
  };
  const onBackClick = () => {
    setActiveStep(activeStep - 1);
  };
  const onSettingOptionClick = (settingOption: GameSetting) => {
    dispatch(setGameSetting(settingOption));
    setActiveStep(2);
  };

  const onStartClick = () => {
    dispatch(setGameStatus("inProgress"));
  };

  return (
    <>
      <WizardView
        activeStep={activeStep}
        onBackClick={onBackClick}
        onContinueClick={onContinueClick}
        onSettingOptionClick={onSettingOptionClick}
        onStartClick={onStartClick}
      />
    </>
  );
};

export default WizardController;

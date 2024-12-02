import { GameSetting } from "@/lib/types";
import { setGameSetting, setGameStatus } from "@/lib/features/gameSettingSlice";
import WizardView from "./WizardView";
import { useAppDispatch } from "@/lib/hooks";
import { useState } from "react";
import { useTranslations } from "next-intl";

const WizardController = () => {
  const dispatch = useAppDispatch();
  const [activeStep, setActiveStep] = useState<number>(0);
  const t = useTranslations("WizardController");

  const content = {
    backButtonText: t("backButtonText"),
    StepZero: {
      title: t("StepZero.title"),
      description_1: t("StepZero.description_1"),
      description_2: t("StepZero.description_2"),
      buttonText: t("StepZero.buttonText"),
    },
    StepOne: {
      title: t("StepOne.title"),
      description: t("StepOne.description"),
      settingOption: {
        date: t("StepOne.settingOption.date"),
        friends: t("StepOne.settingOption.friends"),
        holiday: t("StepOne.settingOption.holiday"),
        work: t("StepOne.settingOption.work"),
      },
    },
    StepTwo: {
      title: t("StepTwo.title"),
      description: t("StepTwo.description"),
      buttonText: t("StepTwo.buttonText"),
    },
  };

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
        content={content}
      />
    </>
  );
};

export default WizardController;

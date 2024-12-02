import LandingView from "./LandingView";
import { useState } from "react";
import { useTranslations } from "next-intl";

const LandingController = () => {
  const [onboardingStep, setOnboardingStep] = useState<number>(0);
  const onClickHandler = () => {
    if (onboardingStep === 2) {
      setOnboardingStep(0);
    } else {
      setOnboardingStep(onboardingStep + 1);
    }
  };
  const t = useTranslations("LandingController");
  const content = [
    {
      title: t("title_1"),
      subtitle: t("subtitle_1"),
    },
    {
      title: t("title_2"),
      subtitle: t("subtitle_2"),
    },
    {
      title: t("title_3"),
      subtitle: t("subtitle_3"),
    },
  ];

  return (
    <LandingView
      onboardingStep={onboardingStep}
      onClickHandler={onClickHandler}
      content={content}
    />
  );
};

export default LandingController;

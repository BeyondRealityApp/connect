import { Box, Button, MobileStepper } from "@mui/material";
import { GameSetting } from "@/lib/types";
import WizardStepZero from "./WizardStepZero";
import WizardStepOne from "./WizardStepOne";
import WizardStepTwo from "./WizardStepTwo";

type WizardView = {
  activeStep: number;
  onBackClick: () => void;
  onContinueClick: () => void;
  onSettingOptionClick: (settingOption: GameSetting) => void;
  onStartClick: () => void;
  content: {
    backButtonText: string;
    StepZero: {
      title: string;
      description_1: string;
      description_2: string;
      buttonText: string;
    };
    StepOne: {
      title: string;
      description: string;
      settingOption: {
        date: string;
        friends: string;
        holiday: string;
        work: string;
      };
    };
    StepTwo: {
      title: string;
      description: string;
      buttonText: string;
    };
  };
};

const WizardView: React.FC<WizardView> = ({
  activeStep,
  onBackClick,
  onContinueClick,
  onSettingOptionClick,
  onStartClick,
  content,
}) => {
  const backButton = (
    <Button
      onClick={onBackClick}
      disabled={activeStep <= 0}
      sx={{ marginRight: 1 }}
    >
      {content.backButtonText as unknown as string}
    </Button>
  );

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "80%",
        }}
      >
        {activeStep === 0 && (
          <WizardStepZero
            content={content.StepZero}
            onContinueClick={onContinueClick}
          />
        )}
        {activeStep === 1 && (
          <WizardStepOne
            onSettingOptionClick={onSettingOptionClick}
            content={content.StepOne}
          />
        )}
        {activeStep === 2 && (
          <WizardStepTwo
            onStartClick={onStartClick}
            content={content.StepTwo}
          />
        )}
      </Box>
      <MobileStepper
        variant="dots"
        steps={3}
        position="bottom"
        activeStep={activeStep}
        backButton={backButton}
        nextButton={<Box sx={{ width: "64px" }} />}
        sx={{
          backgroundColor: "transparent",
        }}
      />
    </>
  );
};

export default WizardView;

import { Box, Button, MobileStepper } from "@mui/material";
import { GameSetting } from "@/lib/features/gameSettingSlice";
import WizardStepZero from "./WizardStepZero";
import WizardStepOne from "./WizardStepOne";
import WizardStepTwo from "./WizardStepTwo";

type WizardView = {
  activeStep: number;
  onBackClick: () => void;
  onContinueClick: () => void;
  onSettingOptionClick: (settingOption: GameSetting) => void;
  onStartClick: () => void;
};

const WizardView: React.FC<WizardView> = ({
  activeStep,
  onBackClick,
  onContinueClick,
  onSettingOptionClick,
  onStartClick,
}) => {
  const backButton = (
    <Button
      onClick={onBackClick}
      disabled={activeStep <= 0}
      sx={{ marginRight: 1 }}
    >
      Back
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
          <WizardStepZero onContinueClick={onContinueClick} />
        )}
        {activeStep === 1 && (
          <WizardStepOne onSettingOptionClick={onSettingOptionClick} />
        )}
        {activeStep === 2 && <WizardStepTwo onStartClick={onStartClick} />}
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

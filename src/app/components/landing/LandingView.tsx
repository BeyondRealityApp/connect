import { Box, Fade } from "@mui/material";
import LandingStepZeroView from "./LandingStepZeroView";
import LandingStepOneView from "./LandingStepOneView";

type LandingViewProps = {
  onboardingStep: number;
  onClickHandler: () => void;
};

const LandingView: React.FC<LandingViewProps> = ({
  onboardingStep,
  onClickHandler,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
      }}
      onClick={onClickHandler}
    >
      <Fade in={onboardingStep === 0}>
        <div>
          <LandingStepZeroView />
        </div>
      </Fade>
      <Fade in={onboardingStep === 1}>
        <div>
          <LandingStepOneView />
        </div>
      </Fade>
    </Box>
  );
};

export default LandingView;

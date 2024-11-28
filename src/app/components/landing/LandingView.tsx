import { Box, Fade, Typography } from "@mui/material";
import { TransitionGroup } from "react-transition-group";

type LandingViewProps = {
  onboardingStep: number;
  onClickHandler: () => void;
};

const onboardingContent = [
  {
    title: "Connect",
    subtitle: "Click to start",
  },
  {
    title: "Go offline",
    subtitle: "to connect",
  },
  {
    title: "No, seriously.",
    subtitle: "Turn off your internet, to continue",
  },
];

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
        overflow: "hidden",
      }}
      onClick={onClickHandler}
    >
      <TransitionGroup>
        <Fade key={onboardingStep} timeout={500}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "90%",
            }}
            textAlign="center"
          >
            <Typography
              variant="h2"
              sx={{
                fontWeight: 200,
                userSelect: "none",
              }}
            >
              {onboardingContent[onboardingStep].title}
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 200,
                userSelect: "none",
              }}
            >
              {onboardingContent[onboardingStep].subtitle}
            </Typography>
          </Box>
        </Fade>
      </TransitionGroup>
    </Box>
  );
};

export default LandingView;

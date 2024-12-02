import { Box, Fade, Typography } from "@mui/material";
import { TransitionGroup } from "react-transition-group";
import LocaleSelectorController from "../layout/locale_selector/LocaleSelectorController";

type LandingViewProps = {
  onboardingStep: number;
  onClickHandler: () => void;
  content: {
    title: string;
    subtitle: string;
  }[];
};

const LandingView: React.FC<LandingViewProps> = ({
  onboardingStep,
  onClickHandler,
  content,
}) => {
  return (
    <>
      <LocaleSelectorController />
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
                {content[onboardingStep].title}
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 200,
                  userSelect: "none",
                }}
              >
                {content[onboardingStep].subtitle}
              </Typography>
            </Box>
          </Fade>
        </TransitionGroup>
      </Box>
    </>
  );
};

export default LandingView;

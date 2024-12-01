import { Button, Typography } from "@mui/material";

type WizardStepZeroProps = {
  onContinueClick: () => void;
};

const WizardStepZero: React.FC<WizardStepZeroProps> = ({ onContinueClick }) => {
  return (
    <>
      <Typography
        variant="h3"
        textAlign="center"
        fontWeight={200}
        marginBottom={2}
      >
        Welcome
      </Typography>
      <Typography
        variant="h6"
        textAlign="center"
        fontWeight={200}
        marginBottom={4}
      >
        Connect enables you to connect with your loved ones through asking
        meaningfull questions.
        <br></br>
        <br></br>
        Select the company you&apos;re with, and start asking questions.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        size="large"
        sx={{
          borderRadius: 20,
          marginTop: 2,
          width: "100%",
          height: 60,
          maxWidth: 400,
        }}
        onClick={onContinueClick}
      >
        Continue
      </Button>
    </>
  );
};

export default WizardStepZero;

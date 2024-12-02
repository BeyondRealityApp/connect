import { Button, Typography } from "@mui/material";

type WizardStepZeroProps = {
  onContinueClick: () => void;
  content: {
    title: string;
    description_1: string;
    description_2: string;
    buttonText: string;
  };
};

const WizardStepZero: React.FC<WizardStepZeroProps> = ({
  onContinueClick,
  content,
}) => {
  return (
    <>
      <Typography
        variant="h3"
        textAlign="center"
        fontWeight={200}
        marginBottom={2}
      >
        {content.title}
      </Typography>
      <Typography
        variant="h6"
        textAlign="center"
        fontWeight={200}
        marginBottom={4}
      >
        {content.description_1}
        <br />
        <br />
        {content.description_2}
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
        {content.buttonText}
      </Button>
    </>
  );
};

export default WizardStepZero;

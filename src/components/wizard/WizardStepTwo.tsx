import { Box, Button, Typography } from "@mui/material";
import React from "react";

type WizardStepTwoProps = {
  onStartClick: () => void;
  content: {
    title: string;
    description: string;
    buttonText: string;
  };
};

const WizardStepTwo: React.FC<WizardStepTwoProps> = ({
  onStartClick,
  content,
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
    >
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
        {content.description}
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
        onClick={onStartClick}
      >
        {content.buttonText}
      </Button>
    </Box>
  );
};

export default WizardStepTwo;

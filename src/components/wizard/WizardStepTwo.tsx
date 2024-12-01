import { Box, Button, Typography } from "@mui/material";
import React from "react";

type WizardStepTwoProps = {
  onStartClick: () => void;
};

const WizardStepTwo: React.FC<WizardStepTwoProps> = ({ onStartClick }) => {
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
        Ready?
      </Typography>
      <Typography
        variant="h6"
        textAlign="center"
        fontWeight={200}
        marginBottom={4}
      >
        Make yourself comfortable, and let&apos;s get started.
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
        Start
      </Button>
    </Box>
  );
};

export default WizardStepTwo;

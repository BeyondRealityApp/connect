import { Box, Typography } from "@mui/material";

const LandingStepOneView = () => {
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
        variant="h4"
        sx={{
          fontWeight: 200,
          userSelect: "none",
        }}
      >
        Go offline to connect
      </Typography>
    </Box>
  );
};

export default LandingStepOneView;

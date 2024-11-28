import { Box, Typography } from "@mui/material";

const LandingStepZeroView = () => {
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
        variant="h2"
        sx={{
          fontWeight: 200,
          userSelect: "none",
        }}
      >
        Connect
      </Typography>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 200,
          userSelect: "none",
        }}
      >
        Click to start
      </Typography>
    </Box>
  );
};

export default LandingStepZeroView;

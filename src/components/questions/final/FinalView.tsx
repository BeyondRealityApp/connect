import { Box, Button, Typography } from "@mui/material";
import React from "react";
import ShareIcon from '@mui/icons-material/Share';

type FinalViewProps = {
  onRestartClick: () => void;
  onShareClick: () => void;
  content: {
    description_1: string;
    description_2: string;
    shareButtonText: string;
    restartButtonText: string;
  }
};

const FinalView: React.FC<FinalViewProps> = ({
  onRestartClick,
  onShareClick,
  content,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
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
        <Typography
          variant="h5"
          textAlign="center"
          fontWeight={200}
          marginBottom={2}
        >
          {content.description_1}
          <br />
          <br />
          {content.description_2}
        </Typography>
        <Button
          color="primary"
          size="large"
          variant="contained"
          onClick={onShareClick}
          startIcon={<ShareIcon />}
          sx={{
            marginTop: 2,
          }}
        >
          {content.shareButtonText}
        </Button>
      </Box>
      <Button
        color="primary"
        onClick={onRestartClick}
        sx={{
          borderRadius: 20,
          width: "80%",
          height: 60,
          position: "absolute",
          bottom: 20,
        }}
      >
        {content.restartButtonText}
      </Button>
    </Box>
  );
};

export default FinalView;

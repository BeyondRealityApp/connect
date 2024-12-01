import { Box, Button, Typography } from "@mui/material";
import React from "react";
import ShareIcon from '@mui/icons-material/Share';

type FinalViewProps = {
  onRestartClick: () => void;
  onShareClick: () => void;
};

const FinalView: React.FC<FinalViewProps> = ({
  onRestartClick,
  onShareClick,
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
          That was it. We hope you enjoyed getting to know each other better!
          <br />
          <br />
          If you did, please consider sharing this game with someone else.
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
          Share
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
        Restart
      </Button>
    </Box>
  );
};

export default FinalView;

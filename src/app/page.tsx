"use client";

import { Box } from "@mui/material";
import LandingController from "./components/landing/LandingController";
import QuestionsController from "./components/questions/QuestionsController";
import theme from "@/theme";
import { useState } from "react";

export default function Home() {
  const [offline, setOnline] = useState<boolean>(true);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.primary.main,
      }}
    >
      {offline ? <QuestionsController /> : <LandingController />}
    </Box>
  );
}

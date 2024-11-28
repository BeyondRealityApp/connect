"use client";

import { Box } from "@mui/material";
import LandingController from "./components/landing/LandingController";
import QuestionsController from "./components/questions/QuestionsController";
import theme from "@/theme";
import { useEffect, useState } from "react";

export default function Home() {
  const [offline, setOffline] = useState<boolean>(false);

  useEffect(() => {
    function onlineHandler() {
      setOffline(false);
    }

    function offlineHandler() {
      setOffline(true);
    }

    window.addEventListener("online", onlineHandler);
    window.addEventListener("offline", offlineHandler);

    return () => {
      window.removeEventListener("online", onlineHandler);
      window.removeEventListener("offline", offlineHandler);
    };
  }, []);
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

"use client";

import { createTheme } from '@mui/material/styles';
import { Poppins } from "next/font/google";

export const poppins = Poppins({
  weight: ["200", "300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const theme = createTheme({
    palette: {
      primary: {
        main: "#20A76F",
        contrastText: "#fff",
      },
      secondary: {
        main: "#A72058",
      },
      success: {
        main: "#73BB2A",
        contrastText: "#fff",
      },
      error: {
        main: "#C91D25",
      },
      warning: {
        main: "#E8A530",
      },
      background: {
        default: "#F4F6F4",
        paper: "#fdfdfc",
      },
    },
    typography: {
      fontFamily: poppins.style.fontFamily,
      fontSize: 12,
    },
  });

export default theme;

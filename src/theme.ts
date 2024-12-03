"use client";

import { createTheme } from "@mui/material/styles";
import { Poppins } from "next/font/google";

// Augment the palette to include an ochre color
declare module "@mui/material/styles" {
  interface Palette {
    purple: Palette["primary"];
    red: Palette["primary"];
    blue: Palette["primary"];
  }

  interface PaletteOptions {
    purple?: PaletteOptions["primary"];
    red?: PaletteOptions["primary"];
    blue?: PaletteOptions["primary"];
  }
}

// Update the Button's color options to include an ochre option
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    purple: true;
    red: true;
    blue: true;
  }
}

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
    purple: {
      light: "#a32cbd",
      main: "#8124af",
      dark: "#4d199a",
      contrastText: "#fff",
    },
    red: {
      light: "#e32a64",
      main: "#bc245d",
      dark: "#811b4e",
      contrastText: "#fff",
    },
    blue: {
      light: "#24acff",
      main: "#258ade",
      dark: "#2058a7",
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: poppins.style.fontFamily,
    fontSize: 12,
  },
});

export default theme;

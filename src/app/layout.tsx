import type { Metadata } from "next";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/theme";
import { Box } from "@mui/material";

export const metadata: Metadata = {
  title: "Connect",
};

const poppins = Poppins({
  weight: ["200", "300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "100vh",
                width: "100vw",
                overflow: "hidden",
              }}
            >
              {children}
            </Box>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

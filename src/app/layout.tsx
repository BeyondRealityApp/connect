import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import OnlineProvider from "@/providers/OnlineProvider";
import PageContainer from "@/components/layout/PageContainer";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/theme";
import StoreProvider from "./StoreProvider";

export const metadata: Metadata = {
  title: "Connect",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <StoreProvider>
            <ThemeProvider theme={theme}>
              <OnlineProvider>
                <PageContainer>{children}</PageContainer>
              </OnlineProvider>
            </ThemeProvider>
          </StoreProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

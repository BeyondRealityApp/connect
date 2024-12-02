import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import OnlineProvider from "@/providers/OnlineProvider";
import PageContainer from "@/components/layout/PageContainer";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/theme";
import StoreProvider from "../StoreProvider";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

export const metadata: Metadata = {
  title: "Connect",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  if (!routing.locales.includes(locale as "en" | "nl")) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <StoreProvider>
            <ThemeProvider theme={theme}>
              <OnlineProvider>
                <NextIntlClientProvider messages={messages}>
                  <PageContainer>{children}</PageContainer>
                </NextIntlClientProvider>
              </OnlineProvider>
            </ThemeProvider>
          </StoreProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

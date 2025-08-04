import type { Metadata } from "next";

import "./globals.css";
import { geistSans, publicSans } from "../config/font";
import { Provider } from "../components/ui/provider";
import { ReactQueryProvider, ThemeProvider } from "../providers";
import { Container } from "../../styled-system/jsx";
import { css } from "../../styled-system/css";
import { Sidebar } from "../components/Dashboard";

export const metadata: Metadata = {
  title: "Rotate Dashbard",
  description: "A pixel-perfect, accessible and responsive dashboard application built with React 19, Next.js 15 (App Router), TypeScript, and Chakra UI with and Panda CSS.",
};

export default function RootLayout({
  children,
}: Readonly<ILayoutProps>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${publicSans.variable} ${geistSans.variable}`}>
        <ReactQueryProvider>
          <ThemeProvider>
            <Provider>
              <Container 
                display="flex" 
                minHeight="100vh"
                bg="#FAFAFA"
                paddingX="0"
                paddingY="0"
                className={css({
                  _dark: {
                    backgroundColor: 'gray.900'
                  }
                })}
              >
                <Sidebar />
                {children}
              </Container>
            </Provider>
          </ThemeProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}

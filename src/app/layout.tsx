import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/hooks/use-theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CarbonTracker - Carbon Footprint Dashboard",
  description: "Professional carbon footprint tracking and analysis dashboard",
  keywords: ["carbon footprint", "sustainability", "emissions tracking", "environmental"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          defaultTheme="system"
          storageKey="carbontracker-ui-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
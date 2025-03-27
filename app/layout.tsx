import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import Footer from "./components/layout/Footer";
import NavDock from "./components/layout/NavDock";
import { ThemeProvider } from "./components/layout/ThemeProvider";
import DockSwipe from "./components/layout/DockSwipe";

export const metadata = {
  title: `devdaman`,
  description: `full stack web developer portofolio blog`,
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="max-w-[1350px] mx-auto">
        <ThemeProvider defaultTheme="system" storageKey="theme">
          <DockSwipe />
          <main className="py-20 overflow-hidden">{children}</main>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}

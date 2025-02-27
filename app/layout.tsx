import "./globals.css";
import { Inter } from "next/font/google";

import Footer from "./components/layout/Footer";
import NavDock from "./components/layout/NavDock";
import { ThemeProvider } from "./components/layout/ThemeProvider";

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
      <body className="max-w-[1160px] mx-auto">
        <ThemeProvider defaultTheme="system" storageKey="theme">
          <NavDock />
          <main className="py-20 overflow-hidden">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}

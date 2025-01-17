import "./globals.css";
import { Inter } from "next/font/google";

import Footer from "./components/layout/Footer";
import NavDock from "./components/layout/NavDock";

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
      <body className="">
        <NavDock />
        <main>{children}</main>
      </body>
    </html>
  );
}

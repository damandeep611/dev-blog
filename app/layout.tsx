import "./globals.css";
import { Inter } from "next/font/google";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

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
      <body>
        <section className="min-h-screen">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </section>
      </body>
    </html>
  );
}

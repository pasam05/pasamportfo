import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NoiseBackground from "@/components/NoiseBackground";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Andy Bryant - Creative Developer",
  description: "Portfolio website for Andy Bryant, a creative developer specializing in front-end development and interactive experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans relative min-h-screen`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <NoiseBackground />
      </body>
    </html>
  );
}

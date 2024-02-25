import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbars/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nasional Budaya",
  description:
    "Aplikasi berbasis web untuk meningkatkan pengetahuan kebudayaan indonesia diantaranya ada, quiz tebak lokasi dan mengingat kembali permainan tradisional indonesia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="night">
      <body className={inter.className}>
        {/* Navbar section */}
        <Navbar />
        {/* content */}
        {children}
      </body>
    </html>
  );
}

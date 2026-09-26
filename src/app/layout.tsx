// src/app/layout.tsx

import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor"; // 1. CustomCursor import කිරීම
import SmoothScroll from "@/components/SmoothScroll"; // 2. SmoothScroll ද නැවත import කිරීම

// Font variables සකස් කිරීම
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const orbitron = Orbitron({ 
    subsets: ["latin"], 
    weight: ['400', '500', '700', '900'], 
    variable: "--font-orbitron" 
});

export const metadata: Metadata = {
  title: "NEXENTIA '26",
  description: "The official website for NEXENTIA '26 by JICTS.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${orbitron.variable} font-sans bg-black`}>
        <CustomCursor /> {/* 3. Component එක මෙතනට එක් කිරීම */}
        <SmoothScroll /> {/* 4. SmoothScroll ද මෙතනට එක් කිරීම */}
        <Navbar />
        {children}
      </body>
    </html>
  );
}
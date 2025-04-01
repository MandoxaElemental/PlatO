import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavbarComponent } from "./Components/NavbarComponentLeft";
import { NavbarComponentRight } from "./Components/NavbarComponentRight";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PlatO",
  description: "Share Your Meal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex justify-between px-5">
          <div className="sticky top-0">
        <NavbarComponent/>
          </div>
        {children}
        <div className="sticky top-0">
        <NavbarComponentRight/>
        </div>
    </div>
      </body>
    </html>
  );
}

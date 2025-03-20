import type { Metadata } from "next";
import { DM_Serif_Text, Open_Sans } from "next/font/google";
import "./globals.css";

const dmSerif = DM_Serif_Text({
  subsets: ["latin"],
  weight: ['400']
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ['300','400','500','600','700']
});

export const metadata: Metadata = {
  title: "Clearvision",
  description: "New Nonprofit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSerif.className} ${openSans.className}`}
      >
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Ubuntu_Sans, Roboto } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const ubuntuSans = Ubuntu_Sans({
  variable: "--font-ubuntu-sans",
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: "400",
  variable: "--font-roboto",
  subsets: ["latin"],

})


export const metadata: Metadata = {
  title: "Galo Berlini",
  description: "Galo Berlini. Fullstack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ubuntuSans.className} antialiased`}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import { Ubuntu_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const ubuntuSans = Ubuntu_Sans({
  	variable: "--font-ubuntu-sans",
  	subsets: ["latin"],
});

export const metadata: Metadata = {
  	title: "Galo Berlini Fullstack Developer",
 	description: "Galo Berlini. Fullstack Developer",
};
export const viewport: Viewport = {
  	width: 'device-width',
}

export default function RootLayout({
  	children,
}: Readonly<{
  	children: React.ReactNode;
}>)
{
    return (
     	<html lang="en" suppressHydrationWarning>
        	<body
          	className={`${ubuntuSans.className} antialiased`}
			>
            	<ThemeProvider> 
					<main>{children}</main>
				</ThemeProvider>
        	</body>
     	</html>
    );
  }

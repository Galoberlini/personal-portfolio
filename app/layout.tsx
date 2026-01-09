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
	description: "A personal portfolio developed with Next.js, showcasing my projects and skills as a web developer.",
	openGraph: {
		title: 'Galo Berlini Fullstack Developer',
		siteName: 'Galo Berlini Fullstack Developer',
		description: 'A personal portfolio developed with Next.js, showcasing my projects and skills as a web developer.',
		images: ['https://galo-berlini.vercel.app/images/PortfolioTools.png'],
		url: 'https://galo-berlini.vercel.app/',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Galo Berlini Fullstack Developer',
		description: 'A personal portfolio developed with Next.js, showcasing my projects and skills as a web developer.',
		images: ['https://galo-berlini.vercel.app/images/PortfolioTools.png'],
	},
};
export const viewport: Viewport = {
	width: 'device-width',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${ubuntuSans.className} antialiased`}
			>
				<ThemeProvider>
					<>{children}</>
				</ThemeProvider>
			</body>
		</html>
	);
}

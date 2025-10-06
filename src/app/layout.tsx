import type { Metadata } from "next";
import { Libre_Baskerville, Lato } from "next/font/google";
import "./globals.css";

// Headings font
const libreBaskerville = Libre_Baskerville({
  variable: "--font-headings",
  subsets: ["latin"],
  weight: ["400", "700"],
});

// Body font
const lato = Lato({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Gurugram Real Estate | Residential and Commercial",
  description: "Find your dream property in Gurugram with Gopal Estate. Explore top residential and commercial real estate listings at today.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${libreBaskerville.variable} ${lato.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

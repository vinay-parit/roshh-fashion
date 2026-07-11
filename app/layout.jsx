import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "ROSHH FASHION — Premium Minimal Fashion",
  description:
    "Fashion that moves with you. Shop premium essentials for men, women & kids. Elevated everyday basics, editorial style, monochrome luxury.",
  keywords:
    "fashion, premium, minimal, clothing, men, women, kids, Roshh, India",
  openGraph: {
    title: "ROSHH FASHION — Premium Minimal Fashion",
    description: "Fashion that moves with you. Shop premium essentials.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0A0A0A" />
      </head>
      <body
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Navbar />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

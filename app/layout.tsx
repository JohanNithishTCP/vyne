import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AOSProvider from "./components/AOSProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vyne",
  description: "Vyne | Prescriptions, Shop, Medical Devices & Support",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${inter.variable} antialiased`}
      >
        <AOSProvider />
        {children}
      </body>
    </html>
  );
}

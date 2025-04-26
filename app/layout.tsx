import type { Metadata } from "next";
import {  Roboto } from "next/font/google";
import "@/styles/globals.css";


const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],

  display: "swap"
})


export const metadata: Metadata = {
  title: "Foodies",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode}>) {
  return (
    <html lang="en">

      <body
        className={`${roboto.variable} antialiased flex flex-col items-center`}
      >
        {children}
      </body>
    </html>
  );
}

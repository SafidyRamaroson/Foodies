import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "@/styles/globals.css";
import { CartProvider } from "@/contexts/CartContext";


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
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">

      <body
        className={`${roboto.variable} antialiased flex flex-col items-center`}
      >
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}

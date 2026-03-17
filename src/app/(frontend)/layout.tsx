import type { Metadata } from "next";
import "./globals.css";
import Banner from '@/components/banner'
import Navbar from "@/components/nav";
import Footer from "@/components/footer";


export const metadata: Metadata = {
  title: "IEIA - Filadelfia",
  description: "Igreja Ieia Filadelfia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="sans-serif " style={{ fontFamily: 'Poppins' }}>

        <Navbar />
        {children}
        <Footer />
      </body>
    </html >
  );
}

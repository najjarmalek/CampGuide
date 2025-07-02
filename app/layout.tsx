import type { Metadata } from "next";
import "./globals.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "travel",
  description: "Travel UI/UX App For Camp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body cz-shortcut-listen="true">
        <Navbar/> 
        <main className ="relative overflow-hidden">
          {children}
        </main>
        
        <Footer/>
      </body>
    </html>
  );
}

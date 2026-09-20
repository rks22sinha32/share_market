import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Ticker from "./components/Ticker"; 
import Footer from "./components/Footer"; // ✨ Yahan humne naya Footer import kiya

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bullfin | Trading Academy",
  description: "Learn from people who trade every single day",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">
        {/* Ticker sabse upar aa gaya! */}
        <Ticker /> 
        
        {/* ✨ YAHAN CHANGE KIYA HAI: Navbar ko mt-10 (margin-top) de diya taaki yeh Ticker ke neeche rahe */}
        <div className="sticky top-10 z-[90] mt-10">
          <Navbar />
        </div>
        
        {/* Main Content Area (flex-grow ensures it pushes footer to the bottom) */}
        <main className="flex-grow">
          {children}
        </main>
        
        {/* ✨ Yeh raha aapka Footer jo ab poori website par automatically dikhega! */}
        <Footer />
      </body>
    </html>
  );
}
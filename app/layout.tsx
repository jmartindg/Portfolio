import "./globals.css";

// Font
import { Inter } from "@next/font/google";

// Components
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  display: "optional",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <head />
      <body className="bg-gray-50">
        <Navbar />
        {children}
      </body>
    </html>
  );
}

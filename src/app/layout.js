import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/utilities/Navbar";
import Footer from "./components/utilities/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tradisio",
  description: "Generated by create next app",
};

export default function RootLayout({ children}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}

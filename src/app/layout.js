import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";
import WhatsAppButton from "../components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Infiniaero",
  description: "Our advanced UAV technologies deliver innovative drone solutions tailored for each industry unique challenges, enhancing data collection, operational safety, and decision-making across diverse sectors.",
};

export default function RootLayout({ children }) {
  return (<>
    <html lang="en">
      <WhatsAppButton />

      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  </>);
}
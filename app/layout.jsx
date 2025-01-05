
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header"
import { PageTransition } from "@/components/Pagetransition";
import { StairTransition } from "@/components/StairTransition";


const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: '--font-robotoMono'
})

export const metadata = {
  title: "Terese Bodérus",
  description: "Portfolio for Terese Bodérus, aspiring developer and licensed Medical Laboratory Technologist.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${robotoMono.variable}`}>
        <Header />
        <StairTransition />
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}

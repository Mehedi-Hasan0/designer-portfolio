import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "../app/components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Container from "./components/Container";
import Article from "./components/article/Article";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sheikh Portfolio",
  description: "Sheikh Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Container>
          <Article />
          <Footer />
        </Container>
      </body>
    </html>
  );
}

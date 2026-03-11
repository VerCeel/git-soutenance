import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/static/Navbar";
import Background from "@/components/static/Background";

const nunito = Nunito({
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Github project",
  description: "soutnance ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={nunito.className}
      >
        <NavBar />
        <Background>
        {children}
        </Background>
      </body>
    </html>
  );
}

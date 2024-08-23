import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Personal Blog",
  description: "A personal blog website of Raiyan Takrim",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Header>
            <Navigation />
          </Header>
          <div className="sm:container sm:mx-auto mx-4 max-w-[1020px] min-h-screen pt-[72px]">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next"
import { Roboto_Mono } from "next/font/google"

import "./globals.css";

import { Providers } from "../components/providers";
import Nav from "../components/nav"
import Footer from '../components/footer'

const RobotoMonoFont = Roboto_Mono({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: "Nikola Nedeljković | Portfolio & Personal Blog",
  description: "Full Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${RobotoMonoFont.className} relative min-h-svh bg-white dark:bg-black`}>
              <Providers>
                <Nav/>
                <main className="w-full flex justify-center">
                  <div className="w-full max-w-screen-lg px-3">
                    {children}
                  </div>
                </main>
                <div className="py-8"></div>
                <Footer/>
              </Providers>
            </body>
        </html>
  );
}

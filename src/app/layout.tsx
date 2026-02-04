import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppContextProvider } from "@/context/AppContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jarvis | Arijit Mondal",
  description: "Jarvis AI Assistant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex flex-col h-full bg-zinc-900 max-w-4xl mx-auto`}
      >
        <AppContextProvider>
          <header className="w-full h-16 border-b border-zinc-800 flex items-center">
            <h1 className="uppercase text-4xl font-bold px-2">Jarvis</h1>
          </header>

          <main className="flex-1 overflow-hidden flex flex-col">
            {children}
          </main>

          <footer className="w-full h-10 border-t border-zinc-800 flex items-center justify-center">
            <p className="text-sm font-medium text-zinc-700">Build By Arijit Mondal</p>
          </footer>
        </AppContextProvider>
      </body>
    </html>
  );
}

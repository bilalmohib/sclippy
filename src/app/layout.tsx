import type { Metadata } from "next";
import { ThemeProvider } from 'next-themes';
import MainAppLayout from "@/layouts/MainAppLayout";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sclippy - The Mac OS Shortcut Simulator",
  description: "Sclippy aims to help users learn and practice Mac keyboard shortcuts in a simulated environment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-black">
        <ThemeProvider>
          <MainAppLayout>
            {children}
          </MainAppLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}

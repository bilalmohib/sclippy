import type { Metadata } from "next";
import MainAppLayout from "@/layouts/MainAppLayout";
import "./globals.css";
import SnackBarProvider from "@/providers/SnackBarProvider";

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
        <SnackBarProvider>
          <MainAppLayout>
            {children}
          </MainAppLayout>
        </SnackBarProvider>
      </body>
    </html>
  );
}

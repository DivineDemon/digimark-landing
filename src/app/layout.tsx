import { type Metadata } from "next";
import { Open_Sans } from "next/font/google";

import "@/assets/css/globals.css";
import { cn } from "@/lib/utils";

const openSans = Open_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Digimark Developers | Your Innovative Solutions Partner",
  description: "Your Innovative Solutions Partner.",
  icons: [{ rel: "icon", url: "/favicon.webp" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={cn("antialiased", openSans.className)}>
      <body>{children}</body>
    </html>
  );
}

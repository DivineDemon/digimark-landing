import { type Metadata } from "next";
import { Poppins } from "next/font/google";

import "@/assets/css/globals.css";
import Navbar from "@/components/navbar";
import { cn } from "@/lib/utils";
import { TRPCReactProvider } from "@/trpc/react";

export const metadata: Metadata = {
  title: "Digimark Developers",
  description: "Digimark Developers",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={cn("bg-[#F4F4F4] antialiased", poppins.className)}
    >
      <body>
        <TRPCReactProvider>
          <Navbar />
          {children}
        </TRPCReactProvider>
      </body>
    </html>
  );
}

import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { dark, neobrutalism, shadesOfPurple } from "@clerk/themes";
import { ThirdwebProvider } from "thirdweb/react";

//import { Toaster } from "react-hot-toast";

import { cn, constructMetadata } from "@/lib/utils";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import "./globals.css";
import { Toaster } from "@/app/components/ui/shadcn/sonner"

const inter = Inter({ subsets: ["latin"] });

export const metadata = constructMetadata({
  title: "Ways2Coin - the best place for crypto trade",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn("relative h-full font-sans antialiased", inter.className)}
      >
        

        <Toaster />
        <main className="relative flex flex-col min-h-screen bg-gradient-to-r from-fuchsia-500 to-cyan-500">
          <ClerkProvider>
            <ThirdwebProvider>
              <Navbar />
              <div className="flex-grow flex-1 py-20">{children}</div>
              <Footer />
            </ThirdwebProvider>
          </ClerkProvider>
        </main>
      </body>
    </html>
  );
}

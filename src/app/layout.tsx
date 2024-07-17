import { Inter } from "next/font/google";

import { Toaster } from "react-hot-toast";

import { cn, constructMetadata } from "@/lib/utils";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import "./globals.css";
//import { Toaster } from "@/app/components/ui/shadcn/sonner";
import Providers from "@/app/components/Providers";
import { InformationalBanner } from "@/app/components/ui/InformationalBanner";
import GoogleAnalytics from '@/app/components/GoogleAnalytics';


const inter = Inter({ subsets: ["latin"] });

export const metadata = constructMetadata({
  title: "Coin-realms - the best place for crypto trade",
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
          <Providers>
            <Navbar />
            <GoogleAnalytics />
            <div className="flex-grow flex-1 py-20">{children}</div>
            <InformationalBanner />
            <Footer />
          </Providers>
        </main>
      </body>
    </html>
  );
}

"use client";
import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { redirect, useRouter } from "next/navigation";

import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ways2Coin - Buy & Sell",
  description: "Crypto exchange buy & sell",
};

export default function Page() {
  {
    /* const router = useRouter();
  const { user } = useUser();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // If the user is not authenticated, redirect to sign-up page
    if (!user) {
      redirect('/sign-in'); // Redirect to sign-up page
    }
    else { 
      setLoading(false);
    }

  }, [user, router]);

  if (loading) return (<>Loading...</>)*/
  }

  return (
    <>
      <div className=" py-8 lg:py-16 mx-auto max-w-6xl space-y-10 ">
        <MaxWidthWrapper>
          <header>
            <div className="py-2">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl leading-24">
                Buy & sell
              </h1>
              <p className="text-lg text-gray-700 sm:text-xl my-10">
                Welcome to our Buy & Sell page where you can effortlessly
                exchange fiat currency for cryptocurrencies and vice versa.
                Whether you&apos;re looking to buy Bitcoin with AUD or swap
                Ethereum for AUD, our intuitive platform makes it easy to
                execute transactions securely and swiftly. Dive into the world
                of crypto trading today!
              </p>
            </div>
          </header>
        </MaxWidthWrapper>
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <iframe
            id="iframe-widget"
            src="https://changenow.io/embeds/exchange-widget/v2/widget.html?FAQ=true&amount=0.1&amountFiat=1500&backgroundColor=FFFFFF&darkMode=false&from=btc&fromFiat=aud&horizontal=false&isFiat=true&lang=en-US&link_id=85215b7dd3241c&locales=true&logo=false&primaryColor=50bdf9&to=eth&toFiat=eth&toTheMoon=true"
            style={{ height: "356px", width: "100%", border: "none" }}
          ></iframe>{" "}
          <script
            defer
            type="text/javascript"
            src="https://changenow.io/embeds/exchange-widget/v2/stepper-connector.js"
          ></script>
        </main>
      </div>
    </>
  );
}

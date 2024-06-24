'use client';
import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { Metadata } from "next";
import { useMutation } from "@tanstack/react-query";

import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import { fetchVerificationStatus } from '@/app/actions/veriff'
import BuySellSkeleton from "@/app/components/ui/skeleton/BuySell";
import StepperForm from "@/app/components/exchangeStepperForm";


interface VerificationStatusMessages {
  [key: string]: string; // Index signature
}

const verificationStatusMessages: VerificationStatusMessages = {
  approved: "Your verification was successful. You can access this page.",
  declined: "Your verification was declined. Please contact support for assistance.",
  resubmitted: "Your verification requires resubmission. Please check your email for instructions.",
  expired: "Your verification session has expired. Please start a new verification process.",
};


export default function Page() {
  const router = useRouter();
  const { user, isLoaded, isSignedIn } = useUser();
  const userId = user?.id || '';
  const userEmail = user?.emailAddresses[0]?.emailAddress || '';
  
  const [verificationStatus, setVerificationStatus] = useState("");
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    //er;
    if (!user) {
//      router.push("/sign-in");
      return;
    }
    fetchVerificationStatus(userId)
      .then((status) => {
        setVerificationStatus(status);
        if(status) setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching verification status:", error);
        setLoading(false);
      });
  }, [user, router]);

  useEffect(() => {
    if (!loading && verificationStatus !== "approved") {
      const message = verificationStatusMessages[verificationStatus] || "Unknown verification status";
      router.push(`/verification-error?reason=${encodeURIComponent(message)}`);
    } 
  }, [verificationStatus, loading, router]);

  if (loading) {
    return <div className="py-8 lg:py-16 mx-auto max-w-6xl space-y-10 ">
        <MaxWidthWrapper>
          <header>
            <div className="py-2 px-4">
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
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <BuySellSkeleton />
        </main>
        </MaxWidthWrapper>
    </div>
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
            src='https://changenow.io/embeds/exchange-widget/v2/widget.html?FAQ=true&amount=0.1&amountFiat=1500&backgroundColor=FFFFFF&darkMode=false&from=btc&fromFiat=aud&horizontal=false&isFiat&lang=en-US&link_id=c11faacdf83834&locales=true&logo=false&primaryColor=2ca4d7&to=eth&toFiat=eth&toTheMoon=true'
            style={{ height: "356px", width: "100%", border: "none" }}
          ></iframe>{" "}
          <script
            defer
            type="text/javascript"
            src='https://changenow.io/embeds/exchange-widget/v2/stepper-connector.js'
          ></script>
          {/* Custom Stepper form */}
          {/*<StepperForm userId={userId} userEmail={userEmail} />*/}
        </main>
      </div>
    </>
  );
}


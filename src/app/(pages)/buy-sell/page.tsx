"use client";
import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import { fetchVerificationStatus } from "@/app/actions/veriff";
import PaymentButton from "../../components/ui/PaymentButtonSquare";
import AssetCard from "@/app/components/assetCard";
import { getAssetByIdFromCG } from "@/app/actions/currencies";
import useSWR from "swr";
import BuySellSkeleton from "@/app/components/ui/skeleton/BuySell";

interface VerificationStatusMessages {
  [key: string]: string;
}

const verificationStatusMessages: VerificationStatusMessages = {
  approved: "Your verification was successful. You can access this page.",
  declined:
    "Your verification was declined. Please contact support for assistance.",
  resubmitted:
    "Your verification requires resubmission. Please check your email for instructions.",
  expired:
    "Your verification session has expired. Please start a new verification process.",
};

const BuyBitcoinPage: React.FC = () => {
  const router = useRouter();
  const { user, isLoaded, isSignedIn } = useUser();
  const userId = user?.id || "";
  const userEmail = user?.emailAddresses[0]?.emailAddress || "";

  const [verificationStatus, setVerificationStatus] = useState("");
  const [loading, setLoading] = useState(true);
  const [agreedToTerms, setAgreedToTerms] = useState(false); // State for checkbox

  const {
    data: currency,
    isLoading: isCurrencyLoading,
    error: currencyError,
  } = useSWR("bitcoin", getAssetByIdFromCG, {
    refreshInterval: 60000, // Polling interval in milliseconds (e.g., every 60 seconds)
  });

  useEffect(() => {
    if (!user) {
      return;
    }
    fetchVerificationStatus(userId)
      .then((status) => {
        setVerificationStatus(status);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching verification status:", error);
        setLoading(false);
      });
  }, [user, userId]);

  useEffect(() => {
    if (!loading && verificationStatus !== "approved") {
      const message =
        verificationStatusMessages[verificationStatus] ||
        "Unknown verification status";
      router.push(`/verification-error?reason=${encodeURIComponent(message)}`);
    }
  }, [verificationStatus, loading, router]);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAgreedToTerms(e.target.checked);
  };

  return (
    <div className="py-8 lg:py-16 mx-auto max-w-6xl space-y-10">
      <MaxWidthWrapper>
        <header>
        <div className="py-2 px-4">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl leading-24">
                Buy Bitcoin (BTC)
              </h1>
              <p className="text-lg text-gray-700 sm:text-xl my-10">
                Welcome to our Buy Bitcoin page where you can effortlessly exchange AUD for Bitcoin (BTC). 
                Dive into the world of crypto trading today!
              </p>
            </div>
        </header>

        <main className="mx-auto px-4">
          {/* Content above AssetCard */}
          <div>
            <div className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
              {loading ? (
                <BuySellSkeleton />
              ) : (
                <div className="flex flex-col space-y-16 py-8 p-4">
                  {/* Title and description for Bitcoin widget */}
                  <div className="max-w-3xl">
                    <h2 className="text-2xl font-semibold text-gray-800">
                      Current Bitcoin (BTC) Stats
                    </h2>
                    <p className="text-gray-700 mt-2">
                      Check out the latest statistics for Bitcoin below. Stay
                      informed with real-time data on price changes and more.
                    </p>
                  </div>

                  {/* Widget for Bitcoin stats */}
                  <div className="w-[75%] mx-auto">
                    <AssetCard
                      id={currency?.id || ""}
                      symbol={currency?.symbol || ""}
                      name={currency?.name || ""}
                      image={currency?.image || ""}
                      price_change_24h={
                        currency?.price_change_percentage_24h || 0
                      }
                      currentPrice={currency?.current_price || 0}
                      cardClassName="w-full max-w-[100%] p-6 bg-white border border-gray-200 rounded-lg shadow-md"
                      imageClassName="w-16 h-16 mx-auto mb-4"
                      titleClassName="text-xl font-semibold text-gray-900 dark:text-white"
                      subtitleClassName="mb-2 text-lg tracking-tight text-gray-700 dark:text-white uppercase"
                      priceChangeClassName="mb-1 font-normal text-gray-800"
                      currentPriceClassName="text-3xl font-bold text-gray-900 dark:text-white"
                      linkClassName="inline-flex items-center text-blue-600 hover:underline"
                    />
                  </div>

                  {/* Purchase information */}
                  <div className="mt-12">
                    <h3 className="text-xl font-semibold text-gray-800">
                      Purchase Bitcoin (BTC)
                    </h3>
                    <p className="text-gray-700 mt-2">
                      To buy Bitcoin, click the button below and follow the
                      instructions in the modal. Once completed, we will send
                      BTC to your connected Metamask wallet address.
                    </p>

                    {/* Approval checkbox 
                    <div className="mt-4 flex items-center">
                      <input
                        type="checkbox"
                        id="termsCheckbox"
                        className="form-checkbox h-5 w-5 text-blue-500"
                        checked={agreedToTerms}
                        onChange={handleCheckboxChange}
                      />
                      <label
                        htmlFor="termsCheckbox"
                        className="ml-2 text-gray-700"
                      >
                        I confirm that I have opened and signed the{" "}
                        <a
                          href="#"
                          className="text-blue-600 hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          credit card authorization document
                        </a>
                        .
                      </label>
                    </div>*/}

                    <div className="mt-12">
                      <PaymentButton />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>
      </MaxWidthWrapper>
    </div>
  );
};

export default BuyBitcoinPage;

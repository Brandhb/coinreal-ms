"use client";
import useSWR from "swr";
import { getAssetsFromCG, getCurrenciesFromDS } from "@/app/actions/currencies";
import { columns } from "@/app/(pages)/currency-list/columns";
import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/app/components/ui/Button";
import { Leaf, ArrowLeftRight, DollarSign } from "lucide-react";
import Link from "next/link";
import Perk from "./components/ui/Perk";
import { HowItWorks } from "./components/mainPage/HowItWorks";
import Testimonials from "./components/testimonials";
import { MobileFriendlyTable } from "./components/ui/currencyList/mobile-data-table";
import { DataTable } from "./components/ui/currencyList/data-table";
import AssetList from "./components/assetCardList";

const perks = [
  {
    name: "Secure & Easy Transactions",
    Icon: ArrowLeftRight,
    description:
      "Our platform offers secure and easy transactions for buying, selling, and trading cryptocurrencies.",
  },
  {
    name: "Fiat Currency Support",
    Icon: DollarSign,
    description:
      "Trade crypto with ease using fiat currencies. We support multiple fiat currencies for your convenience.",
  },
  {
    name: "For the Planet",
    Icon: Leaf,
    description:
      "We've pledged 1% of sales to the preservation and restoration of the natural environment.",
  },
];

export default function Home() {
  const {
    data: currencies,
    isLoading,
    error,
  } = useSWR("currencies", getAssetsFromCG, {
    refreshInterval: 5000, // Polling interval in milliseconds (e.g., every 5 seconds)
  });

  return (
    <>
      <MaxWidthWrapper>
        {/* HeroSection */}
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl space-y-10">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl leading-24">
            Safely Buy, Sell, and{" "}
            <span className="text-blue-600">Trade Cryptocurrencies</span>.
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="/currency-list" className={buttonVariants()}>
              Browse Currencies
            </Link>
            <Button variant="ghost">
              <a
                href="sign-up"
                className="inline-flex items-center justify-center"
              >
                Get Started
                <svg
                  className="w-3 h-3 ms-2 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </Button>
          </div>
        </div>
      </MaxWidthWrapper>
      <div className="relative bg-transparent">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          style={{ marginBottom: "-1px" }}
        >
          <path
            fill="rgb(249 250 251)"
            fillOpacity="1"
            d="M0,32L80,37.3C160,43,320,53,480,64C640,75,800,85,960,122.7C1120,160,1280,224,1360,256L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
        <section className="bg-gray-50 border-gray-50 border-2">
          <MaxWidthWrapper className="lg:pt-0 lg:mt-[-150px] pb-24 md:py-10 sm:py-10 space-y-16 lg:space-y-32">
            {/* perks section */}
            <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl space-y-4">
              <h1 className="text-3xl px-4 font-bold tracking-tight text-gray-900 sm:text-3xl leading-24">
                The most trusted cryptocurrency platform
              </h1>
              <h3 className="text-lg mb-8 text-gray-500">
                Here are a few reasons why you should choose Ways2Coin
              </h3>
            </div>

            <div
              className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0"
              style={{ marginTop: "30px" }}
            >
              {perks.map((perk) => (
                <Perk
                  key={perk.name}
                  title={perk.name}
                  Icon={perk.Icon}
                  description={perk.description}
                />
              ))}
            </div>
            {/* How It Works Section */}
              <AssetList cryptocurrencies={currencies || []} />

            {/* How It Works Section */}
            <HowItWorks />

            {/* Testimonials Section*/}
            <Testimonials />
          </MaxWidthWrapper>
        </section>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          style={{ marginTop: "-1px" }}
        >
          <path
            fill="rgb(249 250 251)"
            fillOpacity="1"
            d="M0,64L80,106.7C160,149,320,235,480,256C640,277,800,235,960,229.3C1120,224,1280,256,1360,272L1440,288L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
        {/* Call to Action Section */}
        <section className="text-white p-20">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-8">Start Trading Today</h2>
            <p className="text-lg mb-8">
              Join thousands of traders already using Ways2Coin platform. Sign
              up now!
            </p>
            <a
              href="/signup"
              className="bg-white text-blue-500 font-semibold px-6 py-3 rounded-full inline-block hover:bg-blue-400 hover:text-white"
            >
              Sign Up
            </a>
          </div>
        </section>
      </div>
    </>
  );
}

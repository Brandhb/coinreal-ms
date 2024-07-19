"use client";
import useSWR from "swr";
import { getAssetsFromCG, getCurrenciesFromDS } from "@/app/actions/currencies";
import { columns } from "@/app/(pages)/currency-list/columns";
import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/app/components/ui/Button";
import {
  Leaf,
  ArrowLeftRight,
  DollarSign,
  Shield,
  Globe,
  Lightbulb,
} from "lucide-react";
import Link from "next/link";
import Perk from "./components/ui/Perk";
import { HowItWorks } from "./components/mainPage/HowItWorks";
import Testimonials from "./components/testimonials";
import { MobileFriendlyTable } from "./components/ui/currencyList/mobile-data-table";
import { DataTable } from "./components/ui/currencyList/data-table";
import AssetList from "./components/assetCardList";
import { cn } from "@/lib/utils";

const perks = [
  {
    name: "Robust Security",
    Icon: Shield,
    description:
      "Our platform provides top-notch security features to protect your digital assets.",
  },
  {
    name: "Global Access",
    Icon: Globe,
    description:
      "Trade cryptocurrencies from anywhere in the world, at any time.",
  },
  {
    name: "Lightning-Fast Transactions",
    Icon: Lightbulb,
    description:
      "Experience rapid transaction speeds for buying, selling, and trading crypto.",
  },
];

export default function Home() {
  const {
    data: currencies,
    isLoading,
    error,
  } = useSWR("currencies", getAssetsFromCG, {
    refreshInterval: 4000, // Polling interval in milliseconds (e.g., every 4 seconds)
  });

  return (
    <>
      <MaxWidthWrapper>
        {/* Hero Section */}
        <section className="py-20 text-center flex flex-col items-center max-w-3xl mx-auto space-y-10">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl px-4 leading-24">
            Seamlessly Buy, Sell, and{" "}
            <span className="text-teal-800">Exchange Digital Assets</span>.
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="/marketplace" className={buttonVariants()}>
              Explore Marketplace
            </Link>
            <Button
              variant="ghost"
              className="inline-flex items-center justify-center"
            >
              <a
                href="sign-up"
                className="inline-flex items-center justify-center"
              >
                Join Now
                <svg
                  className="w-3 h-3 ml-2 rtl:rotate-180"
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
        </section>
      </MaxWidthWrapper>

      <div className="relative bg-transparent">
      {/*  <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          style={{ marginBottom: "-1px" }}
        >
          <path
            fill="rgb(249 250 251)"
            fillOpacity="1"
            d="M0,32L80,37.3C160,43,320,53,480,64C640,75,800,85,960,122.7C1120,160,1280,224,1360,256L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>*/}

        

        <section className="bg-white border-gray-200 border-2 py-20">
          
          <MaxWidthWrapper className="pb-24 md:py-10 sm:py-10 px-10 space-y-16 lg:space-y-32">
            {/* Smooth transition from Call to Action to How It Works */}
            

            {/* How It Works Section */}
            <HowItWorks />

            {/* Perks Section */}
            <div className="text-center mx-auto max-w-3xl space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Why Choose Us?
              </h2>
              <p className="text-lg text-gray-500 mb-8">
                Discover the benefits of using our platform.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
              {perks.map((perk) => (
                <Perk
                  key={perk.name}
                  title={perk.name}
                  Icon={perk.Icon}
                  description={perk.description}
                />
              ))}
            </div>

            {/* Asset List Section */}
            <AssetList cryptocurrencies={currencies || []} />

            {/* Testimonials Section */}
            <Testimonials />
          </MaxWidthWrapper>
        </section>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          style={{ marginTop: "-2px" }}
        >
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,64L80,106.7C160,149,320,235,480,256C640,277,800,235,960,229.3C1120,224,1280,256,1360,272L1440,288L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
      </div>
    </>
  );
}

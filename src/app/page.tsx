import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/app/components/ui/Button";
import {
  ArrowDownToLine,
  CheckCircle,
  Leaf,
  ArrowLeftRight,
  LineChart,
  DollarSign,
} from "lucide-react";
import Link from "next/link";
import Perk from "./components/ui/Perk";
import VeriffComponent from "./components/ui/Veriff";
import { HowItWorks } from "./components/mainPage/HowItWorks";
import Testimonials from "./components/testimonials";

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
            <Link href="/products" className={buttonVariants()}>
              Browse Trending
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
          <MaxWidthWrapper className="lg:pt-0 lg:mt-[-200px] pb-24 md:py-10 sm:py-10 space-y-16 lg:space-y-32">
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
              style={{ marginTop: "0px" }}
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
            {/* Features section
            <section className="py-20">
              <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  
                  <div className="border p-6 rounded-lg">
                    <h2 className="text-xl font-semibold mb-4">
                      Secure & Easy Transactions
                    </h2>
                    <p>
                      Our platform offers secure and easy transactions for
                      buying, selling, and trading cryptocurrencies.
                    </p>
                  </div>
                  
                  <div className="border p-6 rounded-lg">
                    <h2 className="text-xl font-semibold mb-4">
                      Fiat Currency Support
                    </h2>
                    <p>
                      Trade crypto with ease using fiat currencies. We support
                      multiple fiat currencies for your convenience.
                    </p>
                  </div>
             
                  <div className="border p-6 rounded-lg">
                    <h2 className="text-xl font-semibold mb-4">
                      Real-time Market Data
                    </h2>
                    <p>
                      Stay informed with real-time market data, charts, and
                      analysis to make informed trading decisions.
                    </p>
                  </div>
                </div>
              </div>
            </section> 
            */}

            {/* How It Works Section 
            <section className="bg-gray-100 py-20">
              <div className="container mx-auto">
                <h2 className="text-3xl font-semibold mb-8 text-center">
                  How It Works
                </h2>

              </div>
            </section>*/}
            <HowItWorks />

            {/* Testimonials Section 
            <section className="py-20">
              <div className="container mx-auto">
                <h2 className="text-3xl font-semibold mb-8 text-center">
                  What Our Customers Say
                </h2>
                
              </div>
            </section>*/}
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

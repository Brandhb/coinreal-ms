'use client'
import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import React, { useEffect } from "react";
import { Smile, Fingerprint, DollarSign } from "lucide-react";
import Perk from "@/app/components/ui/Perk";
import { Toaster } from "@/app/components/ui/shadcn/sonner"
import toastStyle from "@/utils/toastConfig";
//import { toast } from "sonner"
import toast from "react-hot-toast";

const features = [
  {
    Icon: Smile,
    title: "Easy to Use",
    description:
      "Our platform is designed to be intuitive and user-friendly, making it easy for anyone to buy, sell, and exchange cryptocurrencies.",
  },
  {
    Icon: Fingerprint,
    title: "Secure Transactions",
    description:
      "We prioritize the security of our users' transactions, employing state-of-the-art encryption and security measures to ensure a safe trading environment.",
  },
  {
    Icon: DollarSign,
    title: "AUD Support",
    description:
      "As an Australian company, we offer the option to buy and exchange cryptocurrencies using AUD, providing our users with added convenience and accessibility.",
  },
];

const Page = () => {
{/*
  useEffect(() => {
    toast.loading("Approving...", {
      id: "approve",
      style: toastStyle,
      position: "bottom-center",
    });
    toast("Approval successful.", {
      icon: "👍",
      id: "approve",
      style: toastStyle,
      position: "bottom-center",
    });
    toast.error("Error", {
      style: toastStyle,
      position: "bottom-center",
    });
  }, [])
  
    
    toast("Event has been created", {
      description: "Sunday, December 03, 2023 at 9:00 AM",
      action: {
        label: "Close",
        onClick: () => console.log("close"),
      },
    })*/}

  
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl space-y-10">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About CoinRealMs
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Your gateway to seamless cryptocurrency exchange and trading.
          </p>
        </div>
      </MaxWidthWrapper>
      <div className="relative bg-transparent mt-[-40px] md:mt-[-130px] lg:mt-[-150px]">
        <svg
          style={{ marginBottom: "-20px" }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="rgb(249 250 251)"
            fillOpacity="1"
            d="M0,192L1440,160L1440,320L0,320Z"
          ></path>
        </svg>
        <section className="border-t border-gray-200 bg-gray-50">
          <MaxWidthWrapper className="py-20 px-5 md:px-10 lg:px-32">
            <div className="mt-12 grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
              {features.map((feature, index) => (
                  <Perk key={feature.title} title={feature.title}  Icon={feature.Icon} description={feature.description}/>
              ))}
            </div>
            <div className="mt-32 md:flex md:space-x-8 ">
              {/* Left part */}
              <div className="md:w-1/2 md:pr-8">
                <h2 className="text-3xl font-bold text-gray-900 md:text-left">
                  Our Vision
                </h2>
              </div>

              {/* Right part */}
              <div className="md:w-1/2 space-y-7 mt-4">
                <div className="rext0md text-gray-800">
                  <p className="md:text-left">
                    At CoinRealMs, we&apos;re committed to providing Australians
                    with the easiest and most convenient way to buy, sell, and
                    exchange cryptocurrencies. As a locally based company, we
                    understand the unique needs of the Australian market, which
                    is why we offer the option to buy and exchange
                    cryptocurrencies using AUD.
                  </p>
                </div>
                <div className="rext0md text-gray-800">
                  <p className="md:text-left">
                    Our platform is designed to be user-friendly and intuitive,
                    ensuring that both beginners and experienced traders can
                    navigate it with ease. We believe in transparency,
                    accessibility, and security, and we&apos;re dedicated to
                    providing our users with a safe and reliable trading
                    environment.
                  </p>
                </div>
                <div className="rext0md text-gray-800">
                  <p className="md:text-left">
                    Whether you&apos;re looking to dip your toes into the world
                    of cryptocurrency for the first time or you&apos;re a
                    seasoned trader looking for a new platform, CoinRealMs has
                    you covered. Join us today and experience the future of
                    finance with ease.
                  </p>
                </div>
              </div>
            </div>
          </MaxWidthWrapper>
        </section>
        <svg
          style={{ marginTop: "-20px" }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="rgb(249 250 251)"
            fillOpacity="1"
            d="M0,256L1440,192L1440,0L0,0Z"
          ></path>
        </svg>
      </div>
    </>
  );
};

export default Page;

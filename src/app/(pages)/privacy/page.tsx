import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import React from "react";
import { ShieldCheck, Lock, UserCheck } from "lucide-react";
import Perk from "@/app/components/ui/Perk";

const perks = [
  {
    Icon: ShieldCheck,
    title: "Security Measures",
    description:
      "We implement robust security measures to safeguard your personal information and ensure the confidentiality of your transactions.",
  },
  {
    Icon: Lock,
    title: "Data Encryption",
    description:
      "All data transmitted through our platform is encrypted using the latest encryption standards, providing an additional layer of security.",
  },
  {
    Icon: UserCheck,
    title: "Verification Process",
    description:
      "To ensure compliance with regulatory requirements and prevent fraud, we require users to undergo a thorough verification process.",
  },
];

const page = () => {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl space-y-10">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Privacy Policy
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Your privacy and security are our top priorities.
          </p>
        </div>
      </MaxWidthWrapper>
      <div className="relative bg-transparent mt-[-100px]">
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
              {perks.map((perk, index) => (
                <Perk
                  key={index}
                  Icon={perk.Icon}
                  title={perk.title}
                  description={perk.description}
                />
              ))}
            </div>
            <div className="mt-32 md:flex md:space-x-8">
              {/* Left part */}
              <div className="md:w-1/2 md:pr-8">
                <h2 className="text-3xl font-bold text-gray-900 md:text-left">
                  Our Commitment
                </h2>
              </div>

              {/* Right part */}
              <div className="md:w-1/2 space-y-7">
                <div className="text-lg text-gray-800">
                  <p className="md:text-left">
                    At Ways2Coin, we are committed to protecting the privacy
                    and security of our users personal information. We adhere
                    to strict data protection regulations and implement
                    industry-standard security measures to ensure the
                    confidentiality of your data.
                  </p>
                </div>
                <div className="text-lg text-gray-800">
                  <p className="md:text-left">
                    We collect and process personal information only for
                    specified and lawful purposes and handle it in accordance
                    with our Privacy Policy. By using our platform, you consent
                    to the collection and processing of your personal
                    information as described in this policy.
                  </p>
                </div>
                <div className="text-lg text-gray-800">
                  <p className="md:text-left">
                    Our Privacy Policy outlines the types of information we
                    collect, how we use and protect it, and your rights
                    regarding your personal data. We encourage you to review
                    our Privacy Policy carefully to understand how we collect,
                    use, and protect your information.
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

export default page;

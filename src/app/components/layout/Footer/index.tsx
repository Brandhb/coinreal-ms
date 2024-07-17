"use client";
import React from "react";
import { TwitterIcon } from "lucide-react";

const Footer: React.FC = () => {
  const handleContactUsClick = () => {
    window.location.href = "mailto:support@coin-realms.com";
  };

  return (
    <footer className="bg-transparent">
      <div className="mx-auto w-full max-w-screen p-4 px-12 py-6 lg:py-8">
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="md:flex md:justify-between text-white">
          {/* Logo */}
          <div className="mb-6 mr-8 md:mb-0">
            <a href="/" className="flex items-center">
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              Coin-realms
              </span>
            </a>
          </div>
          {/* Contact */}
          <div className="pb-6 px-0 md:px-4 flex flex-col  max-w-[400px]">
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Contact Us
            </h2>
            <p className=" mb-4">
              Have questions or feedback? We&apos;d love to hear from you! Reach
              out to us using the contact information below.
            </p>
            <div className=" mb-4">
              <p>Email: support@coin-realms.com</p>
            </div>
            <button
              onClick={handleContactUsClick}
              className="bg-blue-500 max-w-40 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded shadow"
            >
              Send Email
            </button>
          </div>
          {/* Links */}
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Links
              </h2>
              <ul className="text-white font-medium">
                <li className="mb-4">
                  <a
                    href="/about"
                    className="hover:underline hover:text-gray-300"
                  >
                    About Us
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="/buy-sell"
                    className="hover:underline hover:text-gray-300"
                  >
                    Buy & Sell
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="/personal-wallet"
                    className="hover:underline hover:text-gray-300"
                  >
                    Your Personal Wallet
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="hover:underline hover:text-gray-300"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Follow us
              </h2>
              <ul className="text-white font-medium">
                {/*
               <li className="mb-4">
                  <a href="#" className="hover:underline hover:text-gray-300 ">
                    Github
                  </a>
                </li>
               */}
                <li className="mb-4">
                  <a href="#" className="hover:underline hover:text-gray-300">
                    Discord
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/coin-realms"
                    className="hover:underline hover:text-gray-300"
                  >
                    X Page
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-white font-medium">
                <li className="mb-4">
                  <a
                    href="/privacy"
                    className="hover:underline hover:text-gray-300"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="/terms"
                    className="hover:underline hover:text-gray-300"
                  >
                    Terms &amp; Conditions
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="/aml-policy"
                    className="hover:underline hover:text-gray-300"
                  >
                    Anti-Money Laundering (AML) Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        {/* All rights reserved */}
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-white sm:text-center">
            © {new Date().getFullYear()}{" "}
            <a href="/" className="hover:underline hover:text-gray-300">
            Coin-realms
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a
              href="#"
              className="text-white hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 21 16"
              >
                <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
              </svg>
              <span className="sr-only">Discord community</span>
            </a>
            <a
              href="https://x.com/coin-realms"
              className="text-white hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 50 50"
              >
                <path d="M 6.9199219 6 L 21.136719 26.726562 L 6.2285156 44 L 9.40625 44 L 22.544922 28.777344 L 32.986328 44 L 43 44 L 28.123047 22.3125 L 42.203125 6 L 39.027344 6 L 26.716797 20.261719 L 16.933594 6 L 6.9199219 6 z"></path>
              </svg>
              <span className="sr-only">X page</span>
            </a>
            {/*  
           
            <a
              href="#"
              className="text-white hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">GitHub account</span>
            </a>
           */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

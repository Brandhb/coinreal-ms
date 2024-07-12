"use client";
import {
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { FC, useState } from "react";
import Image from "next/image";
import NavBarLogo from "@/app/components/ui/NavBarLogo";

const Navbar: FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-opacity-30 lg:py-4">
      <div className="max-w-7xl mx-auto pr-2 lg:px-4">
        <div className="flex justify-between items-center py-4">
          {/* Left Section: Logo */}
          <div className="flex-shrink-0">
            {/*
            <a href="/" className="text-xl font-bold text-gray-700">
              Ways2Coin
            </a>
            />*/}

            <a
              href="/"
              className="block w-36 h-12 sm:w-36 sm:h-12 md:w-36 md:h-20 lg:w-36 lg:h-20"
            >
              <Image
                alt="navbar-logo"
                src="/navbar-logo.svg"
                layout="responsive"
                width={180}
                height={200}
                className="object-cover"
              />
            </a>
          </div>

          {/* Middle Section: Route Links (Hidden on Mobile) */}
          <div className="hidden md:flex flex-grow justify-center items-center space-x-6">
            <a href="/about" className="text-gray-700 hover:text-gray-300">
              About Us
            </a>
            <a href="/buy-sell" className="text-gray-700 hover:text-gray-300">
              Buy & Sell
            </a>
            <a
              href="/wallet-info"
              className="text-gray-700 hover:text-gray-300"
            >
              Wallet
            </a>
            <a href="/contact" className="text-gray-700 hover:text-gray-300">
              Contact
            </a>
          </div>

          {/* Right Section: Get Started Button (Hidden on Mobile) */}
          <div className="md:block flex-row space-x-6">
            <SignedOut>
              <a
                href="sign-up"
                className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-2 rounded-md"
                onClick={() => redirect("/sign-up")}
              >
                Get Started
              </a>
              <SignInButton>
                <a
                  href="/sign-in"
                  className="text-gray-700 underline hover:text-gray-500 px-0"
                >
                  Sign-in
                </a>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <div className="flex justify-between items-center space-x-3">
                <UserButton />
                <SignOutButton>
                  <a
                    href="/"
                    className="text-gray-200 underline hover:text-gray-300"
                  >
                    Sign-out
                  </a>
                </SignOutButton>
              </div>
            </SignedIn>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile Menu (Hidden by default) */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-md">
            <div className="flex flex-col space-y-4 py-4 px-6">
              <a href="/about" className="text-gray-800 font-medium">
                About
              </a>
              <a href="/buy-sell" className="text-gray-800 font-medium">
                Buy & Sell
              </a>
              <a href="/wallet-info" className="text-gray-800 font-medium">
                Wallet
              </a>
              <a href="/contact" className="text-gray-800 font-medium">
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

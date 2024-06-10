import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import VerificationErrorComp from "@/app/components/ui/VerificationErrorComp";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Verification Error",
  description: "Error page for verification status",
};

export default function VerificationErrorPage() {
  return (
    <div className="py-8 lg:py-16 mx-auto max-w-6xl space-y-10">
      <MaxWidthWrapper>
        <header>
          <div className="py-2 px-4">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl leading-24">
              Verification Error
            </h1>
          </div>
        </header>
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Suspense>
            <VerificationErrorComp />
          </Suspense>
        </main>
      </MaxWidthWrapper>
    </div>
  );
}

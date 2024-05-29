import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import VeriffComponent from "@/app/components/ui/Veriff";
import React, { Suspense } from "react";

const AccountVerificationPage = () => {
  return (
    <>
      <div className="py-8 lg:py-16 mx-auto max-w-6xl space-y-10 ">
        <MaxWidthWrapper>
          <header>
            <div className="py-2">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl leading-24 text-center">
                Account Verification
              </h1>
              <p className="text-lg text-gray-700 sm:text-xl my-10"></p>
            </div>
          </header>
        </MaxWidthWrapper>{" "}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex justify-center">
          <Suspense>
            <VeriffComponent />
          </Suspense>
          
        </main>
      </div>
    </>
  );
};

export default AccountVerificationPage;

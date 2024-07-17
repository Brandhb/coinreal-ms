import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import { SignUp } from "@clerk/nextjs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'CoinRealMs - Sign Up',
  description: 'Crypto exchange sign up page'
}

export default function Page() {
  return (
    <>
      <MaxWidthWrapper>
      <div className="py-20 mx-auto text-center max-w-3xl space-y-10">
      <div className="px-4 pb-10">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl leading-24">
          Sign-up
        </h1>
      </div>
      <div className="flex items-center justify-center">
        <SignUp path="/sign-up" />
      </div>
      </div>
      </MaxWidthWrapper>
      
    </>
  );
}

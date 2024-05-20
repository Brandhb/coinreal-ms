import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import { SignIn } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Ways2Coin - Sign In',
  description: 'Crypto exchange page'
}

export default function Page() {
  const { userId } = auth();

  return (
    <>

      <MaxWidthWrapper>
      <div className="py-20 mx-auto text-center max-w-3xl space-y-10">
      <div className="px-4 pb-10">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl leading-24">
          Sign-in
        </h1>
      </div>
      <div className="flex items-center justify-center">
        <SignIn path="/sign-in" />
      </div>
      </div>
      </MaxWidthWrapper>
      
    </>
  );
}

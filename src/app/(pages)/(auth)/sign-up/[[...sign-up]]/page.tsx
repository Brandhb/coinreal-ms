import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import { SignUp } from "@clerk/nextjs";
import Head from "next/head";

export default function Page() {
  return (
    <>
      <Head>
        <title>Sign Up</title>
        <meta name="description" content="Crypto exchange page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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

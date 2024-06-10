import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import EarthCanvas from "@/app/components/canvas/Earth";
import ContactFrom from "@/app/components/ui/ContactForm.tsx";
import React from "react";

const page = () => {
  return (
    <>
        <div className="py-8 lg:py-16 px-12 mx-auto max-w-screen-md">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl leading-24">
            Contact Us
          </h1>
          <p className="text-lg text-gray-700 sm:text-xl my-10">
            Got a technical issue? Want to send feedback about a beta feature?
            Need details about our Business plan? Let us know.
          </p>
          <div>
            <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-1
             sm:gap-x-6 lg:grid-cols-1 lg:gap-x-8 lg:gap-y-0">
          <ContactFrom />
          {/*<EarthCanvas /> */} 
          </div>
          </div>
        </div>
    </>
  );
};

export default page;

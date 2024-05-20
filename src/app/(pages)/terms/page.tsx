import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import React from "react";

const termsAndConditions = [
  {
    title: "Introduction",
    description:
      "These Website Standard Terms and Conditions (these “Terms” or these “Website Standard Terms and Conditions”) contained herein on this webpage, shall govern your use of this website, including all pages within this website (collectively referred to herein below as this “Website”). These Terms apply in full force and effect to your use of this Website and by using this Website, you expressly accept all terms and conditions contained herein in full. You must not use this Website if you have any objection to any of these Website Standard Terms and Conditions.",
  },
  {
    title: "Intellectual Property Rights",
    description:
      "Other than content you own, which you may have opted to include on this Website through our forms or through other means, under these Terms, Ways2Coin and/or its licensors own all rights to the intellectual property and material contained in this Website, and all such rights are reserved.",
  },
  {
    title: "Restrictions",
    description:
      "You are expressly and emphatically restricted from all of the following: publishing any Website material in any media; selling, sublicensing and/or otherwise commercializing any Website material; publicly performing and/or showing any Website material; using this Website in any way that is, or may be, damaging to this Website; using this Website in any way that impacts user access to this Website; using this Website contrary to applicable laws and regulations, or in a way that causes, or may cause, harm to the Website, or to any person or business entity; engaging in any data mining, data harvesting, data extracting or any other similar activity in relation to this Website, or while using this Website; using this Website to engage in any advertising or marketing.",
  },
  {
    title: "Your Content",
    description:
      "In these Website Standard Terms and Conditions, “Your Content” shall mean any audio, video, text, images or other material you choose to display on this Website. With respect to Your Content, by displaying it, you grant Ways2Coin a non-exclusive, worldwide, irrevocable, royalty-free, sublicensable license to use, reproduce, adapt, publish, translate and distribute it in any and all media.",
  },
  {
    title: "No warranties",
    description:
      "This Website is provided “as is,” with all faults, and Ways2Coin makes no express or implied representations or warranties, of any kind related to this Website or the materials contained on this Website. Additionally, nothing contained on this Website shall be construed as providing consult or advice to you.",
  },
  {
    title: "Limitation of liability",
    description:
      "In no event shall Ways2Coin, nor any of its officers, directors and employees, be liable to you for anything arising out of or in any way connected with your use of this Website, whether such liability is under contract, tort or otherwise, and Ways2Coin, including its officers, directors and employees shall not be liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.",
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

          {termsAndConditions.map((item, index) => (
            <div key={index} className="mt-32 md:flex md:space-x-8">
              {/* Left part */}
              <div className="md:w-1/2 md:pr-8">
                <h2 className="text-3xl font-bold text-gray-900 md:text-left">
                  {item.title}
                </h2>
              </div>

              {/* Right part */}
              <div className="md:w-1/2 space-y-7">
                <div className="rext0md text-gray-800">{item.description}</div>
              </div>
            </div>
          ))}
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

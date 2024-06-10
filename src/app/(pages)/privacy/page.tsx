import { ShieldCheck, Lock, UserCheck, FileText, User, Key, Globe, FileSearch, RefreshCw, PhoneCall } from "lucide-react";


import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import Perk from "@/app/components/ui/Perk";


const perks = [
  {
    Icon: ShieldCheck,
    title: "Introduction",
    description:
      "Ways2Coin ('Ways2Coin,' 'we,' 'us,' or 'our') is committed to protecting the privacy and security of your personal information. This Privacy Policy outlines our practices regarding the collection, use, disclosure, and protection of your personal information in accordance with the Australian Privacy Act 1988 (Cth) and other applicable privacy laws.",
  },
  {
    Icon: User,
    title: "Collection of Personal Information",
    description:
      "We collect personal information from you when you interact with us, such as when you visit our website, use our mobile applications, or engage with our services. The types of personal information we may collect include: Name, address, and contact details; Date of birth; Identification documents (e.g., passport, driver's license); Transactional information (e.g., payment details, digital wallet addresses); Usage data and logs (e.g., IP address, browser type, pages visited); Any other information you choose to provide to us. We may collect personal information directly from you or from third parties, such as our service providers or business partners, where permitted by law.",
  },
  {
    Icon: FileText,
    title: "Use of Personal Information",
    description:
      "We use your personal information for the following purposes: Providing and improving our services; Communicating with you, including responding to your inquiries and providing customer support; Processing transactions, including facilitating payments and verifying your identity; Marketing and promotional purposes, including sending you marketing communications about our products and services; Conducting research and analysis to improve our products and services; Complying with legal and regulatory requirements.",
  },
  {
    Icon: Lock,
    title: "Disclosure of Personal Information",
    description:
      "We may disclose your personal information to third parties in the following circumstances: To our service providers and business partners who assist us in providing our services and conducting our business; To comply with legal obligations, such as responding to lawful requests from government authorities; To protect our rights, property, or safety, or the rights, property, or safety of others; With your consent or as otherwise permitted by law.",
  },
  {
    Icon: Key,
    title: "Security of Personal Information",
    description:
      "We take reasonable steps to protect your personal information from misuse, loss, unauthorized access, modification, or disclosure. These steps include implementing technical and organizational measures to secure your personal information, such as encryption, access controls, and regular security assessments.",
  },
  {
    Icon: RefreshCw,
    title: "Cookies and Similar Technologies",
    description:
      "We use cookies and similar technologies to collect information and enhance your experience on our website and mobile applications. Cookies are small files stored on your device that contain data about your browsing behavior. You can manage your cookie preferences through your browser settings.",
  },
  {
    Icon: Globe,
    title: "Overseas Disclosure",
    description:
      "We may disclose your personal information to overseas recipients, including in countries outside Australia, where necessary for the purposes described in this Privacy Policy. We take steps to ensure that overseas recipients comply with applicable privacy laws and provide a similar level of protection to your personal information.",
  },
  {
    Icon: FileSearch,
    title: "Accessing and Correcting Your Personal Information",
    description:
      "You have the right to access and correct your personal information held by us. If you would like to access or correct your personal information, please contact us using the details provided below. We may request additional information from you to verify your identity before providing access or making corrections.",
  },
  {
    Icon: UserCheck,
    title: "Complaints",
    description:
      "If you have a complaint about our handling of your personal information, please contact us using the details provided below. We will investigate your complaint and provide you with a response in a timely manner. If you are not satisfied with our response, you may lodge a complaint with the Office of the Australian Information Commissioner (OAIC).",
  },
  {
    Icon: RefreshCw,
    title: "Changes to this Privacy Policy",
    description:
      "We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes to this Privacy Policy by posting the updated policy on our website. We encourage you to review this Privacy Policy periodically for any updates.",
  },
  {
    Icon: PhoneCall,
    title: "Contact Us",
    description:
      "If you have any questions about this Privacy Policy or our privacy practices, or if you would like to exercise your rights regarding your personal information, please contact us at support@ways2coin.com.",
  },
];

const page = () => {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl space-y-10 px-4">
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
          style={{ marginBottom: "-20px", marginTop: "50px" }}
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
            <div className="mt-32 md:flex md:space-x-8 space-y-12 md:space-y-0">
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

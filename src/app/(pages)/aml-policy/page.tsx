import React from "react";
import {
  UserCheck,
  Search,
  AlertCircle,
  BookOpen,
  Archive,
  LucideProps,
} from "lucide-react";
import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";

const AMLPolicyPage = () => {
  const policyContent = [
    {
      title: "Customer Identification",
      icon: UserCheck,
      content:
        "We require all customers to verify their identity before using our platform. This includes providing valid identification documents such as a passport, driver's license, or national ID card.",
    },
    {
      title: "Transaction Monitoring",
      icon: Search,
      content:
        "We monitor all transactions on our platform for suspicious activity. This includes large transactions, unusual patterns, or transactions that are inconsistent with a customer's normal behavior.",
    },
    {
      title: "Reporting",
      icon: AlertCircle,
      content:
        "We report any suspicious activity to the relevant authorities as required by law. This includes reporting transactions that are suspected to be involved in money laundering or other illegal activities.",
    },
    {
      title: "Staff Training",
      icon: BookOpen,
      content:
        "We provide regular training to our staff to ensure they are aware of the risks of money laundering and how to identify suspicious activity.",
    },
    {
      title: "Record Keeping",
      icon: Archive,
      content:
        "We maintain records of all transactions and customer identification documents as required by law.",
    },
  ];

  const renderIcon = (
    IconComponent: React.ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
    >
  ) => {
    return <IconComponent className="w-6 h-6 mr-2" />;
  };

  return (
    <>
      <MaxWidthWrapper className="px-12 mb-12 lg:mb-0">
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl space-y-10">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Anti-Money Laundering (AML) Policy
          </h2>
          <p className="mt-4 text-lg text-gray-600">
          Coin-realms is committed to preventing money laundering activities on
            its platform and complying with relevant anti-money laundering (AML)
            laws and regulations. Money laundering is the process of concealing
            the origins of illegally obtained money, typically by means of
            transfers involving foreign banks or legitimate businesses.
          </p>
        </div>
      </MaxWidthWrapper>
      <div className="relative bg-transparent mt-[-40px] md:mt-[-130px] lg:mt-[-150px]">

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
            <p className="mb-6">
              Our AML policy includes the following measures:
            </p>
            {policyContent.map((section, index) => (
              <div key={index} className="mb-8">
                <div className="flex items-center mb-4">
                  {renderIcon(section.icon)}
                  <h2 className="text-lg font-semibold">{section.title}</h2>
                </div>
                <p className="text-gray-600">{section.content}</p>
              </div>
            ))}
            <p className="mb-4">
              By using Coin-realms, you agree to comply with our AML policy and
              provide any information or documentation requested to verify your
              identity. We reserve the right to refuse or suspend service to
              anyone who does not comply with our AML policy.
            </p>
            <p>
              If you have any questions about our AML policy or suspect any
              suspicious activity, please contact us at{" "}
              <a
                href="mailto:support@coin-realms.com"
                className="text-blue-500 underline"
              >
                support@coin-realms.com
              </a>
              .
            </p>
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

export default AMLPolicyPage;

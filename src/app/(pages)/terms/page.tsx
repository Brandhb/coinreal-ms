import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import React from "react";

import {
  Globe,
  CheckCircle,
  FileText,
  User,
  AlertTriangle,
  Info,
  CreditCard,
  XCircle,
  DollarSign,
  Gift,
  UserPlus,
  RefreshCcw,
  Clipboard,
  Lock,
} from "lucide-react";

const termsOfUseContent = [
  {
    title: "Welcome to Ways2Coin",
    Icon: Globe,
    content:
      "Ways2Coin Pty Ltd (we, us, our) owns and operates ways2coin.com.au and all of its sub-domains (the Site), the 'Ways2Coin' iOS and Android mobile applications (the App), and various third-party social media and messaging sites, channels, pages, groups, and forums (collectively, our Services).",
  },
  {
    title: "Acceptance and Variation of Terms",
    Icon: CheckCircle,
    content:
      "Your permission to access and use our Services is conditional upon you agreeing to the terms and conditions set out below before using our Services (Terms). You must read these Terms and our Risk Disclosure Document carefully...",
  },
  {
    title: "Acceptable Use",
    Icon: User,
    content:
      "You agree that you are only authorised to use our Services for your own personal use and for the following activities: accessing and using our Services; and any other purpose which we make known to you...",
  },
  {
    title: "Legal Status of Digital Assets",
    Icon: AlertTriangle,
    content:
      "The legal status of cryptographic coins, tokens, and digital assets (hereafter Digital Assets) is not settled. We do not make any representation as to the legal status of any Digital Assets made available through the Service. It is your responsibility to undertake your own investigations and enquiries, and to satisfy yourself in that regard...",
  },
  {
    title: "No Financial Advice",
    Icon: AlertTriangle,
    content:
      "You acknowledge and agree that we do not hold, or operate under, an Australian Financial Services Licence and are not offering or providing any financial advice or financial products or services of any kind.",
  },
  {
    title: "All Text, Images, and Content",
    Icon: Info,
    content:
      "All text, images, audio recordings, video recordings, and other information and content, including but not limited to, market or trading information, tools, indicators, and materials (Content) hosted or made available on or through our Services is provided:",
    subpoints: [
      "For general information purposes only.",
      "Without any regard whatsoever to the personal circumstances of any person.",
    ],
  },
  {
    title: "User-Created Content",
    Icon: User,
    content:
      "Any user-created Content which is hosted or made available on or through our Services is provided for, and on behalf of, the relevant user who created or supplied such Content.",
    subpoints: [
      "No Content hosted or made available on or through our Services is, or is intended to constitute advice (financial or otherwise) regarding any Digital Assets or financial products or securities of any kind, or an offer, solicitation, recommendation, or invitation, to buy, sell or deal in any way with any of those things.",
      "All statements, representations, estimations, projections, or forecasts made in or through our Services by any person (whether relating to the present or the future) are expressions of opinion only, and do not necessarily represent our opinion or have our endorsement.",
    ],
  },
  {
    title: "Legal Status of Digital Assets",
    Icon: Clipboard,
    content:
      "The legal status of cryptographic coins, tokens, and digital assets (hereafter Digital Assets) is not settled. We do not make any representation as to the legal status of any Digital Assets made available through the Service. It is your responsibility to undertake your own investigations and enquiries, and to satisfy yourself in that regard.",
  },
  {
    title: "No Financial Advice",
    Icon: AlertTriangle,
    content:
      "You acknowledge and agree that we do not hold, or operate under, an Australian Financial Services Licence and are not offering or providing any financial advice or financial products or services of any kind...",
  },
  {
    title:
      "All text, images, audio recordings, video recordings, and other information and content...",
    Icon: FileText,
    content:
      "All text, images, audio recordings, video recordings, and other information and content, including but not limited to, market or trading information, tools, indicators, and materials (Content) hosted or made available on or through our Services is provided...",
  },
  {
    title: "Legal Status of Digital Assets",
    Icon: CheckCircle,
    content:
      "The legal status of cryptographic coins, tokens, and digital assets (hereafter Digital Assets) is not settled. We do not make any representation as to the legal status of any Digital Assets made available through the Service. It is your responsibility to undertake your own investigations and enquiries, and to satisfy yourself in that regard...",
  },
  {
    title: "Risk",
    Icon: AlertTriangle,
    content:
      "Digital Assets Generally Purchasing, holding, or trading (Trading) in Digital Asset involves considerable risk and may result in you losing all of your money. Purchasing, holding and selling Digital Assets involves the use of sophisticated computer hardware and software...",
  },
  {
    title: "Counterparty Risk",
    Icon: AlertTriangle,
    content:
      "As part of our normal business operations, and to provide our users with the best prices for Digital Assets, we hold Digital Assets from time to time on other exchanges. This means we are exposed to counterparty risk in respect of those exchanges...",
  },
  {
    title: "Ongoing Technological Development",
    Icon: Globe,
    content:
      "Many Digital Assets remain under development by their promoters, have not been implemented or deployed, and are not in real-world use. The information published publicly or otherwise made available by the promoters of many Digital Assets is of a technical nature...",
  },
  {
    title: "Trading, Etc.",
    Icon: FileText,
    content:
      "Our Services may include trading tools, indicators, materials, and configurations (Trading Tools) which you may access and use. The factors, variables and circumstances which are accounted for by the Trading Tools are limited to the variables, inputs and specifications...",
  },
  {
    title: "Acknowledgements",
    Icon: CheckCircle,
    content:
      "By using our Services, or any Trading Tool, you acknowledge and agree that: *we do not set the price of any Digital Assets which are tradeable using our Services, but seek to locate competitive prices for Digital Assets;...",
  },
  {
    title: "Australian or New Zealand Residents Only",
    Icon: Globe,
    content:
      "Our Services are only available to residents of Australia or New Zealand. All information and Content hosted or made available on or through our Services is not intended for any person who is not an Australian or New Zealand resident...",
  },
  {
    title: "Age Restrictions",
    Icon: AlertTriangle,
    content:
      "Our Services are designed for use only by people who are 21 years of age or older.",
  },
  {
    title: "Account Creation",
    Icon: UserPlus,
    content: "In order to access and use our Services, you must:",
    subpoints: [
      "create an account on our Site; and",
      "be over the age of 16; and",
      "verify your account by following our know-your-customer (KYC) and anti-money laundering (AML) procedures and providing such information and documents which we reasonably require.",
    ],
    thirdPartyInfo: {
      title: "Third-Party Verification",
      content:
        "We may use, or require you to use, a third-party service provider to verify your identity, in which case, you acknowledge and agree as follows:",
      subpoints: [
        "the account verification process is subject to the terms of service and other requirements of the third-party service provider;",
        "in order to verify your identity, we, or the third-party service provider, may disclose and securely transmit your personal information to:",
        "government authorities;",
        "credit agencies;",
        "politically exposed person database service providers, or other watchlist service providers; and/or",
        "other third-party data or identity verification service providers.",
      ],
      consent:
        "You consent to us collecting and disclosing your personal information for the above purposes.",
      furtherProcedures:
        "We may, at any time, require you to undertake further KYC or AML procedures, and provide further information and documents, in order to maintain your account verification.",
    },
    acknowledgements: {
      title: "Acknowledgements",
      content: "When creating an account, you acknowledge and agree that:",
      subpoints: [
        "you will not provide any false personal information and will keep your personal information accurate and up to date;",
        "you will only create more than one account per person (that is you may have an account for a company or trustee separate to a personal account);",
        "you will only create one account;",
        "you will not allow anyone else to access your account;",
        "you will not create a new account if your account is disabled;",
        "we may alter any part of your user account if we receive a legitimate complaint, or otherwise form the view (in our sole discretion) that it is inappropriate or offensive; and",
        "if you create an account using your user credentials from a third-party site (such as Facebook or Google), your use of such credentials is subject to that third-party site’s terms of use and privacy policy, and you consent to us collecting such user credentials for the purpose of creating your account; and",
        "we have the right to suspend or terminate your access to our Services, at any time, in our sole discretion, without prior notice to you.",
      ],
    },
  },
  {
    title: "Exchange Services",
    Icon: RefreshCcw,
    content:
      "The core service we provide to our users is the matching of offers to buy or sell Digital Assets made by users with opposing offers made by other users, in order to facilitate the exchange of:",
    subpoints: [
      "fiat currency for Digital Assets;",
      "Digital Assets for fiat currency; or",
      "Digital Assets for other Digital Assets.",
    ],
    agentInfo: {
      title: "Agent Representation",
      content:
        "You acknowledge and agree that our facilitation of such exchange transactions is undertaken where necessary as agent on your behalf, and not as principal on our own behalf.",
    },
    actions: {
      title: "Authorized Actions",
      content:
        "You agree, authorize, direct, and consent to us doing the following:",
      subpoints: [
        "communicating any offer submitted by you through our Services to buy or sell Digital Assets (Offer) to other users of our Services;",
        "matching your Offers with opposing Offers of other users (Counterparties);",
        "settling any resulting transactions within a reasonable time by doing one or both of the following things (as determined by us in our discretion):",
        "transferring fiat currency or Digital Assets held to your account to the relevant Counterparties; and/or",
        "applying a debit against your account, and applying a corresponding credit against the relevant Counterparties’ account/s, for fiat currency or Digital Assets, after deducting any fees due and owing by you (refer to the section below relating to Fees).",
      ],
    },
    irrevocable:
      "All Offers, once submitted, are irrevocable and may only be cancelled if we provide the ability to do so on our Services.",
    regulation: "We may, in our absolute discretion, regulate:",
    regulationSubpoints: [
      "the number and type of Offers that you may submit at any one time;",
      "your ability to amend or cancel Offers once submitted; and",
      "the parameters within which Offers may be submitted, such as price increments.",
    ],
    cancelation:
      "We reserve the right to cancel any Offer submitted by you, in whole or in part, where we consider, in our sole absolute discretion, that the Offer:",
    cancelationReasons: [
      "has been submitted by you in breach of these Terms;",
      "has the effect, or may be likely to have:",
      "the effect, of unfairly manipulating any market; or",
      "an adverse impact on our Services, or our reputation or goodwill, or",
      "where an unexpected situation has arisen, such as the failure of a counterparty",
    ],
  },
  {
    title: "Fees",
    Icon: DollarSign,
    content:
      "For a complete list of our fees, please refer to our Fee Schedule.",
    details: "All fees are, unless otherwise expressly stated by us:",
    detailsSubpoints: [
      "for fees described in fiat currency, in Australian dollars ($AUD);",
      "for fees described in Digital Assets, in those applicable Digital Assets; and",
      "inclusive of goods and services tax and other value-added tax.",
    ],
  },
  {
    title: "Payments and Transfers Generally",
    Icon: CreditCard,
    content:
      "Where fiat currency payments or transfers are handled by a third-party payment processor, they are subject to that third-party payment processor’s terms and conditions. We accept no responsibility or liability in relation to payments processed by third-party payment processors. Any issues which you experience in making payments to us may be raised with us, however, we reserve the right to require you to liaise with the third-party payment processor directly.",
    risk: "All Digital Asset payments or transfers are made by you at your own risk and expense. We accept no responsibility or liability in relation to:",
    riskSubpoints: [
      "any delayed or failed payment due to congestion on any blockchain network;",
      "any failed or mistaken payments due to human error, such as entering the incorrect recipient wallet address; or",
      "any fluctuations in the market price of any Digital Asset used to pay our fees.",
    ],
  },
  {
    title: "Refunds and Chargebacks",
    Icon: XCircle,
    content:
      "To the greatest extent permitted by law, subject to anything in these Terms to the contrary, all fees and other monies payable by you to us are non-refundable immediately upon payment by you. To the extent that we are liable under the law for any defect or issue, our liability is limited to the amount paid by you.",
    refunds:
      "We may, in our discretion, offer partial or full refunds where we consider appropriate to do so.",
    recallAndChargebacks:
      "If you initiate a transfer recall with your financial institution, or a chargeback on your credit or debit card, or take any similar action, you must pay us an administration fee of AUD $30.00 on demand. You acknowledge, agree and consent to us setting off any such fees against any monies which we may owe to you from time to time.",
  },
  {
    title: "Affiliate Program",
    Icon: DollarSign,
    content:
      "We may offer an affiliate program, which is subject to our Affiliate Agreement Standard Terms and to our Fee Schedule. You acknowledge and agree that we may vary our Affiliate Agreement Standard Terms at any time without prior notice to you. Your continued use of our Services will constitute an automatic acceptance of any such variation made by us.",
  },
  {
    title: "Promotions and Discounts",
    Icon: Gift,
    content:
      "We may offer promotions and discounts from time to time. All promotions and discounts are offered subject to these Terms and any other terms and conditions we specify.",
  },
  {
    title: "Security",
    Icon: Lock,
    content:
      "You must ensure that all login IDs and passwords required to access our Services are kept secure and confidential. We offer multi-factor authentication to help secure your access to our Services, such as by requiring you to input one-time-use codes, which we encourage you to use to secure your account.",
    notifications: {
      title: "Notifications",
      content:
        "You must immediately notify us of any unauthorized use of your login IDs or passwords or any other breach of security.",
    },
    breachHandling: {
      title: "Breach Handling",
      content:
        "Where there is unauthorized access or a breach of security, we will take appropriate steps to rectify the unauthorized use or breach of security, including by, without limitation, cancelling and resetting the relevant login IDs and passwords, and you must take all other actions that we reasonably deem necessary or desirable to maintain or enhance the security of our computing systems and networks and your access to our Services.",
    },
    disclaimer:
      "We will use all reasonable endeavors to ensure that we provide a secure environment for any data stored or hosted on our systems, including by encrypting your data. You acknowledge however that no information which is available on the Internet is completely secure and you agree that we will not be liable for any damage, loss, cost, liability, expense, injury or death of any kind and however arising including penalties, fines and interest whether prospective or contingent and any amounts that for the time being are not ascertained or ascertainable (Loss) suffered by you or any third party should our security measures (or those of any of our service providers) be overcome or breached.",
  },
  {
    title: "No Interference",
    Icon: AlertTriangle,
    content:
      "You agree that you will not use our Services in any way that could damage our reputation or goodwill.",
  },
];

const TermsPage = () => {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl space-y-10 px-4">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Terms & Conditions
          </h2>
          <p className="mt-4 text-lg text-gray-600">
          Understanding Your Rights and Responsibilities: Exploring Our Terms and Conditions
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
            {/* Render each section dynamically */}
            {termsOfUseContent.map((section, index) => (
              <div key={index} className="mb-8">
                {/* Section title and Icon */}
                <div className="flex items-center mb-4">
                  <h2 className="text-lg font-semibold">{section.title}</h2>
                </div>
                {/* Section content */}
                <p className="text-gray-600 mb-4">{section.content}</p>
                {/* Optional subpoints */}
                {section.subpoints && (
                  <div className="mb-4">
                    <h3 className="text-sm font-semibold">Subpoints</h3>
                    <ul className="list-disc pl-5">
                      {section.subpoints.map((subpoint, index) => (
                        <li key={index} className="text-gray-600">
                          {subpoint}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {/* Optional third party information */}
                {section.thirdPartyInfo && (
                  <div className="mb-4">
                    <h3 className="text-sm font-semibold">
                      {section.thirdPartyInfo.title}
                    </h3>
                    <p className="text-gray-600">
                      {section.thirdPartyInfo.content}
                    </p>
                    {/* Subpoints for third party information */}
                    {section.thirdPartyInfo.subpoints && (
                      <ul className="list-disc pl-5">
                        {section.thirdPartyInfo.subpoints.map(
                          (subpoint, index) => (
                            <li key={index} className="text-gray-600">
                              {subpoint}
                            </li>
                          )
                        )}
                      </ul>
                    )}
                    <p className="text-gray-600">
                      {section.thirdPartyInfo.consent}
                    </p>
                    <p className="text-gray-600">
                      {section.thirdPartyInfo.furtherProcedures}
                    </p>
                  </div>
                )}
                {/* Optional acknowledgements */}
                {section.acknowledgements && (
                  <div className="mb-4">
                    <h3 className="text-sm font-semibold">
                      {section.acknowledgements.title}
                    </h3>
                    <p className="text-gray-600">
                      {section.acknowledgements.content}
                    </p>
                    {/* Subpoints for acknowledgements */}
                    {section.acknowledgements.subpoints && (
                      <ul className="list-disc pl-5">
                        {section.acknowledgements.subpoints.map(
                          (subpoint, index) => (
                            <li key={index} className="text-gray-600">
                              {subpoint}
                            </li>
                          )
                        )}
                      </ul>
                    )}
                  </div>
                )}
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

export default TermsPage;

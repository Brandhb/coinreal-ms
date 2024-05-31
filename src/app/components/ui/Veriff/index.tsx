"use client";

import { FC, useEffect } from "react";
import dynamic from "next/dynamic";

const VeriffComponent: FC = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const Veriff = require("@veriff/js-sdk");
      const { createVeriffFrame } = require("@veriff/incontext-sdk");

      const veriff = Veriff?.Veriff({
        host: process.env.NEXT_PUBLIC_VERIFF_BASE_URL,
        apiKey: process.env.NEXT_PUBLIC_VERIFF_API_KEY,
        parentId: "veriff-root",
        onSession: function (err: any, response: any) {
          // received the response, verification can be started now
          if (err) console.log("err: ", err);
          console.log("response: ", response);
          // incontext sdk - open iframe
          createVeriffFrame({ url: response.verification.url });
        },
      });

      veriff?.mount({
        formLabel: {
          givenName: "First name",
          lastName: "Family name",
          vendorData: "ID Number",
        },
        submitBtnText: "Get verified",
        loadingText: "Please wait...",
      });

      console.log("veriff: ", veriff);
    }
  }, []); // Run only once on component mount

  return (
    <div id="veriff-root">
      {/* This is where Veriff will be mounted */}
      <h1>Test</h1>
    </div>
  );
};

export default VeriffComponent;

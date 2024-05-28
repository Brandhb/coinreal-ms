'use client';
import { useSearchParams } from "next/navigation";
import React from "react";

const VerificationErrorComp = () => {

    // Extract the reason from the query string
  const queryParams = useSearchParams();
  const reason = queryParams.get("reason") || "Unknown reason";
  
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="px-4 py-5 sm:p-6">
        <h2 className="text-xl font-bold mb-4">Oops! There was an error</h2>
        <p className="text-gray-700">{reason}</p>
        
            <a href="/account-verification" className="mt-2 inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-300">
              Go to Account Verification
            </a>

      </div>
    </div>
  );
};

export default VerificationErrorComp;

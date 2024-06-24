import React, { useState } from "react";
import {
  createFiatTransaction,
  getTransactionStatus,
} from "@/app/actions/exchange";
import { Currency } from "@/lib/types/exchangeTypes";
import Dropdown from "./Dropdown";

interface FiatFormProps {
  step: number;
  setStep: (step: number) => void;
  fiatCurrencies: Currency[];
  cryptoCurrencies: Currency[];
  fromCurrency: string;
  setFromCurrency: (currency: string) => void;
  toCurrency: string;
  setToCurrency: (currency: string) => void;
  amount: string;
  setAmount: (amount: string) => void;
  walletAddress: string;
  setWalletAddress: (address: string) => void;
  userId: string;
}

const FiatForm: React.FC<FiatFormProps> = ({
  step,
  setStep,
  cryptoCurrencies,
  fiatCurrencies,
  fromCurrency,
  setFromCurrency,
  toCurrency,
  setToCurrency,
  amount,
  setAmount,
  walletAddress,
  setWalletAddress,
  userId,
}) => {
  const [transaction, setTransaction] = useState<any>(null);
  const [transactionStatus, setTransactionStatus] = useState<string | null>(
    null
  );
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleNext = async () => {
    if (step === 0 && fromCurrency && toCurrency && email && phoneNumber) {
      const data = await createFiatTransaction({
        from_amount: Number(amount),
        from_currency: fromCurrency,
        to_currency: toCurrency,
        to_network: "BNB",
        payout_address: walletAddress,
        deposit_type: "SEPA_1",
        payout_type: "SEPA_1",
        userId,
        customer: {
          contact_info: {
            email: email,
            phone_number: phoneNumber,
          },
        },
      });
      setTransaction(data);
    }
    if (step === 1 && transaction) {
      const data = await getTransactionStatus(transaction.id);
      setTransactionStatus(data.status);
    }
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      {step === 0 && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Enter Your Details</h2>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full p-2 border border-gray-300 rounded mb-2"
          />
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Phone Number"
            className="w-full p-2 border border-gray-300 rounded mb-2"
          />
          <div className="space-y-4">
            <Dropdown<Currency>
              currencies={fiatCurrencies}
              setCurrency={setFromCurrency}
              label="From"
            />

            <Dropdown<Currency>
              currencies={cryptoCurrencies}
              setCurrency={setToCurrency}
              label="To"
            />
            <select
              className="w-full p-2 border border-gray-300 rounded"
              onChange={(e) => setToCurrency(e.target.value)}
            >
              <option value="">To</option>
              {cryptoCurrencies?.map((currency) => (
                <option key={currency.legacyTicker} value={currency.ticker}>
                  {currency.name}
                </option>
              ))}
            </select>
          </div>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Amount"
            className="w-full p-2 border border-gray-300 rounded mb-2"
          />
          <input
            type="text"
            value={walletAddress}
            onChange={(e) => setWalletAddress(e.target.value)}
            placeholder="Wallet Address"
            className="w-full p-2 border border-gray-300 rounded mb-2"
          />
        </div>
      )}
      {step === 1 && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Transaction Status</h2>
          {transactionStatus && (
            <p className="text-gray-600">Status: {transactionStatus}</p>
          )}
        </div>
      )}
      <div className="flex justify-between mt-4">
        <button
          onClick={handleBack}
          disabled={step === 0}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
        >
          Back
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          {step === 1 ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default FiatForm;

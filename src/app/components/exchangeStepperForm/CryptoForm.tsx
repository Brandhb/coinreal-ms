import React, { useState, useEffect } from "react";
import {
  getMinExchangeAmount,
  getEstimatedAmount,
  createTransaction,
  getTransactionStatus,
} from "@/app/actions/exchange";
import { Currency } from "@/lib/types/exchangeTypes";

interface CryptoFormProps {
  step: number;
  setStep: (step: number) => void;
  currencies: Currency[];
  fromCurrency: string;
  setFromCurrency: (currency: string) => void;
  toCurrency: string;
  setToCurrency: (currency: string) => void;
  amount: string;
  setAmount: (amount: string) => void;
  walletAddress: string;
  setWalletAddress: (address: string) => void;
  userId: string;
  userEmail: string;
}

const CryptoForm: React.FC<CryptoFormProps> = ({
  step,
  setStep,
  currencies,
  fromCurrency,
  setFromCurrency,
  toCurrency,
  setToCurrency,
  amount,
  setAmount,
  walletAddress,
  setWalletAddress,
  userId,
  userEmail
}) => {
  const [minAmount, setMinAmount] = useState<number | null>(null);
  const [estimatedAmount, setEstimatedAmount] = useState<number | null>(null);
  const [transaction, setTransaction] = useState<any>(null);
  const [transactionStatus, setTransactionStatus] = useState<string | null>(
    null
  );

  const handleNext = async () => {
    if (step === 0 && fromCurrency && toCurrency) {
      const data = await getMinExchangeAmount(fromCurrency, toCurrency);
      setMinAmount(data.min);
    }
    if (step === 1 && amount) {
      const data = await getEstimatedAmount(
        Number(amount),
        fromCurrency,
        toCurrency
      );
      setEstimatedAmount(data.estimatedAmount);
    }
    if (step === 2 && walletAddress) {
      const data = await createTransaction(
        fromCurrency,
        toCurrency,
        walletAddress,
        Number(amount),
        userId,
        userEmail
      );
      setTransaction(data);
    }
    if (step === 3 && transaction) {
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
          <h2 className="text-xl font-semibold mb-4">Select Currencies</h2>
          <div className="space-y-4">
            <select
              className="w-full p-2 border border-gray-300 rounded"
              onChange={(e) => setFromCurrency(e.target.value)}
            >
              <option value="">From</option>
              {currencies.map((currency) => (
                <option key={currency.legacyTicker} value={currency.ticker}>
                  {currency.name}
                </option>
              ))}
            </select>
            <select
              className="w-full p-2 border border-gray-300 rounded"
              onChange={(e) => setToCurrency(e.target.value)}
            >
              <option value="">To</option>
              {currencies.map((currency) => (
                <option key={currency.legacyTicker} value={currency.ticker}>
                  {currency.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
      {step === 1 && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Enter Amount</h2>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-2"
          />
          {minAmount && (
            <p className="text-gray-600">Minimum amount: {minAmount}</p>
          )}
        </div>
      )}
      {step === 2 && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Estimated Amount</h2>
          {estimatedAmount && (
            <p className="text-gray-600">
              You will receive approximately: {estimatedAmount}
            </p>
          )}
        </div>
      )}
      {step === 3 && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Enter Wallet Address</h2>
          <input
            type="text"
            value={walletAddress}
            onChange={(e) => setWalletAddress(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-2"
          />
        </div>
      )}
      {step === 4 && (
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
          {step === 4 ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default CryptoForm;

import React, { useState, useEffect } from "react";
import { getCurrencies, getFiatCurrencies } from "@/app/actions/exchange";
import TabSelector from "./TabSelector";
import CryptoForm from "./CryptoForm";
import FiatForm from "./FiatForm";
import { Currency } from "@/lib/types/exchangeTypes";

interface StepFormProps {
  userId: string;
  userEmail: string;
}

const StepperForm: React.FC<StepFormProps> = ({ userId, userEmail }) => {
  const [step, setStep] = useState(0);
  const [currencies, setCurrencies] = useState<Currency[]>([]);
  const [fiatCurrencies, setFiatCurrencies] = useState<Currency[]>([]);
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [amount, setAmount] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [activeTab, setActiveTab] = useState<"crypto" | "fiat">("crypto");

  useEffect(() => {
    async function fetchCurrencies() {
      //debugger;
      const cryptoCurrenciesData = await getCurrencies();
      setCurrencies(cryptoCurrenciesData);
      const fiatCurrenciesData = await getFiatCurrencies();
      setFiatCurrencies(fiatCurrenciesData);
    }
    fetchCurrencies();
  }, []);

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <TabSelector activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "crypto" ? (
        <CryptoForm
          step={step}
          setStep={setStep}
          currencies={currencies}
          fromCurrency={fromCurrency}
          setFromCurrency={setFromCurrency}
          toCurrency={toCurrency}
          setToCurrency={setToCurrency}
          amount={amount}
          setAmount={setAmount}
          walletAddress={walletAddress}
          setWalletAddress={setWalletAddress}
          userId={userId}
          userEmail={userEmail}
        />
      ) : (
        <FiatForm
          step={step}
          setStep={setStep}
          fiatCurrencies={fiatCurrencies}
          cryptoCurrencies={currencies}
          fromCurrency={fromCurrency}
          setFromCurrency={setFromCurrency}
          toCurrency={toCurrency}
          setToCurrency={setToCurrency}
          amount={amount}
          setAmount={setAmount}
          walletAddress={walletAddress}
          setWalletAddress={setWalletAddress}
          userId={userId}
        />
      )}
    </div>
  );
};

export default StepperForm;

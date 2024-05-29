import { useState, useEffect } from 'react';
import { getCurrencies, getMinExchangeAmount, getEstimatedAmount, createTransaction, getTransactionStatus } from '@/app/actions/';
import { useQuery } from '@tanstack/react-query';

interface Currency {
  ticker: string;
  name: string;
  image: string;
  hasExternalId: boolean;
  isFiat: boolean;
  featured: boolean;
  isStable: boolean;
  supportsFixedRate: boolean;
}

const StepperForm = () => {
  const [step, setStep] = useState(0);
  const [currencies, setCurrencies] = useState<Currency[]>([]);
  const [fromCurrency, setFromCurrency] = useState('');
  const [toCurrency, setToCurrency] = useState('');
  const [amount, setAmount] = useState('');
  const [minAmount, setMinAmount] = useState<number | null>(null);
  const [estimatedAmount, setEstimatedAmount] = useState<number | null>(null);
  const [walletAddress, setWalletAddress] = useState('');
  const [transaction, setTransaction] = useState<any>(null);
  const [transactionStatus, setTransactionStatus] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCurrencies() {
      const data = await getCurrencies();
      setCurrencies(data);
    }
    fetchCurrencies();
  }, []);
  //const { data: currencies, isLoading: isCurrenciesLoading, error: currenciesError } = useQuery('currencies', getCurrencies);

  {/*const { mutate } = useMutation({
    mutationKey: ['change-order-status'],
    mutationFn: changeOrderStatus,
    onSuccess: () => router.refresh(),
  })*/}
  const handleNext = async () => {
    if (step === 0 && fromCurrency && toCurrency) {
      const data = await getMinExchangeAmount(fromCurrency, toCurrency);
      setMinAmount(data.min);
    }
    if (step === 1 && amount) {
      const data = await getEstimatedAmount(Number(amount), fromCurrency, toCurrency);
      setEstimatedAmount(data.estimatedAmount);
    }
    if (step === 2 && walletAddress) {
      const data = await createTransaction(fromCurrency, toCurrency, walletAddress, Number(amount));
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
            <select className="w-full p-2 border border-gray-300 rounded" onChange={(e) => setFromCurrency(e.target.value)}>
              <option value="">From</option>
              {currencies.map((currency) => (
                <option key={currency.ticker} value={currency.ticker}>
                  {currency.name}
                </option>
              ))}
            </select>
            <select className="w-full p-2 border border-gray-300 rounded" onChange={(e) => setToCurrency(e.target.value)}>
              <option value="">To</option>
              {currencies.map((currency) => (
                <option key={currency.ticker} value={currency.ticker}>
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
          {minAmount && <p className="text-gray-600">Minimum amount: {minAmount}</p>}
        </div>
      )}
      {step === 2 && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Estimated Amount</h2>
          {estimatedAmount && <p className="text-gray-600">You will receive approximately: {estimatedAmount}</p>}
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
          {transactionStatus && <p className="text-gray-600">Status: {transactionStatus}</p>}
        </div>
      )}
      <div className="flex justify-between mt-4">
        <button onClick={handleBack} disabled={step === 0} className="px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50">
          Back
        </button>
        <button onClick={handleNext} className="px-4 py-2 bg-blue-600 text-white rounded">
          {step === 4 ? 'Finish' : 'Next'}
        </button>
      </div>
    </div>
  );
};

export default StepperForm;

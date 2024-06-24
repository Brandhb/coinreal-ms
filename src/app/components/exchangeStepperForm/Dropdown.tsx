import { Currency } from "@/lib/types/exchangeTypes";
import Image from "next/image";
import React, { useState } from "react";

interface DropdownProps<T extends Currency> {
  currencies: T[];
  setCurrency: (ticker: string) => void;
  label: string;
}

const Dropdown = <T extends Currency>({
  currencies,
  setCurrency,
  label,
}: DropdownProps<T>) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to manage dropdown visibility
  const [selectedCurrency, setSelectedCurrency] = useState<T | null>(null); // State to manage selected currency

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSelect = (currency: T) => {
    setSelectedCurrency(currency);
    setCurrency(currency.ticker);
    setIsDropdownOpen(false); // Close dropdown after selection
  };

  return (
    <div className="relative inline-block text-left">
      <button
        id="states-button"
        data-dropdown-toggle="dropdown-states"
        className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4
         text-sm font-medium text-center text-gray-500 bg-gray-100 border
          border-gray-300 rounded-lg hover:bg-gray-200 focus:ring-4
           focus:outline-none focus:ring-gray-100 dark:bg-gray-700
            dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white
             dark:border-gray-600"
        type="button"
        onClick={toggleDropdown}
      >
        {selectedCurrency ? (
          <>
            {selectedCurrency.ticker}
            <Image
              src={selectedCurrency.logo_url}
              alt={`${selectedCurrency.ticker} flag`}
              width={30}
              height={30}
              className="h-3.5 w-3.5 rounded-full ml-2"
            />
          </>
        ) : (
          `${label}`
        )}
      </button>

      {isDropdownOpen && (
        <div
          className="dropdown-menu absolute right-0 mt-2 origin-top-right bg-white dark:bg-gray-700 
          border border-gray-300 dark:border-gray-600 rounded-md shadow-lg max-h-200 overflow-y-auto"
          id="dropdown-states"
        >
          <ul className="py-1">
            {currencies.map((currency) => (
              <li key={currency.id} className="cursor-pointer">
                <button
                  onClick={() => handleSelect(currency)}
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-white
                   hover:bg-gray-100 dark:hover:bg-gray-600 w-full text-center"
                >
                  <span className="flex items-center justify-center">
                    <Image
                      src={currency.logo_url}
                      width={30}
                      height={30}
                      alt={`${currency.ticker} flag`}
                      className="h-3.5 w-3.5 rounded-full mr-2"
                    />
                    {currency.ticker}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;

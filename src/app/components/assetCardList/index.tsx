import React from "react";
import AssetCard from "@/app/components/assetCard";
import { CryptocurrencyFromCG } from "@/lib/types/exchangeTypes";

interface AssetListProps {
  cryptocurrencies: CryptocurrencyFromCG[];
}

const AssetList: React.FC<AssetListProps> = ({ cryptocurrencies }) => {
  if (!cryptocurrencies) return <></>;
  return (
    <>
      <div className="flex overflow-x-auto p-4 space-x-4 no-scrollbar">
        {cryptocurrencies.map((crypto) => (
          <AssetCard
            key={crypto.id}
            id={crypto.id}
            symbol={crypto.symbol}
            name={crypto.name}
            image={crypto.image}
            price_change_24h={crypto.price_change_percentage_24h}
            currentPrice={crypto.current_price}
          />
        ))}
        <div className="flex-shrink-0 max-w-sm min-w-[150px] p-6 border border-gray-200 rounded-lg shadow flex flex-col justify-between bg-gradient-to-r from-green-500 to-teal-500 text-white">
          <a
            href="/currency-list"
            className="mb-2 text-xl font-semibold tracking-tight hover:underline"
          >
            See all cryptocurrencies
          </a>
          <a
            href="/buy-sell"
            className="inline-flex items-center font-medium text-white hover:underline mt-4"
          >
            Buy Now
            <svg
              className="w-3 h-3 ml-2 rtl:rotate-90"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11v4.833A1.166 1.166 0 0113.833 17H2.167A1.167 1.167 0 011 15.833V4.167A1.166 1.166 0 012.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
              />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
};

export default AssetList;

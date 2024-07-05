import Image from 'next/image';
import React from 'react';

interface AssetCardProps {
  id: string;
  symbol: string;
  name: string;
  image: string;
  price_change_24h: number;
}

const AssetCard: React.FC<AssetCardProps> = ({ id, symbol, name, image, price_change_24h }) => {
  return (
    <div className="max-w-sm min-w-[150px] p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <Image src={image} width={10} height={10} alt={name} className="w-16 h-16 mx-auto mb-4" />
      <div className="text-center">
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{name}</h5>
        <p className={`mb-3 font-normal ${price_change_24h >= 0 ? 'text-green-500' : 'text-red-500'} dark:text-gray-400`}>
          {price_change_24h >= 0 ? '+' : ''}{price_change_24h.toFixed(2)}%
        </p>
        <div className="flex justify-center">
          <a href={`https://coingecko.com/en/coins/${id}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 hover:underline">
            See more
            <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AssetCard;

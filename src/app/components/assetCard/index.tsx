import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface AssetCardProps {
  id: string;
  symbol: string;
  name: string;
  image: string;
  price_change_24h: number;
  currentPrice: number;
  // Define dynamic Tailwind classes as props
  cardClassName?: string; // Example: "max-w-sm min-w-[150px] p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
  imageClassName?: string; // Example: "w-16 h-16 mx-auto mb-4"
  titleClassName?: string; // Example: "mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white"
  subtitleClassName?: string; // Example: "mb-4 text-lg tracking-tight text-gray-700 dark:text-white uppercase"
  priceChangeClassName?: string; // Example: "mb-3 font-normal"
  currentPriceClassName?: string;
  linkClassName?: string; // Example: "inline-flex items-center text-blue-600 hover:underline"
}

const AssetCard: React.FC<AssetCardProps> = ({
  id,
  symbol,
  name,
  image,
  price_change_24h,
  currentPrice,
  cardClassName,
  imageClassName,
  titleClassName,
  subtitleClassName,
  priceChangeClassName,
  currentPriceClassName,
  linkClassName,
}) => {
  return (
    <div
      className={cn(
        "max-w-sm min-w-[150px] p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700",
        cardClassName
      )}
    >
      <Image
        src={image}
        width={64}
        height={64}
        alt={name}
        className={cn("w-16 h-16 mx-auto mb-4", imageClassName)}
      />

      <div className="text-center">
        <h5 className={cn("mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white", titleClassName)}>{name}</h5>
        <h3 className={cn("mb-4 text-lg tracking-tight text-gray-700 dark:text-white uppercase", subtitleClassName)}>{symbol}</h3>

        {/* Current Price in AUD */}
        <p
          className={cn("text-lg font-bold text-gray-900 dark:text-white", currentPriceClassName)}
        >
          A
          {currentPrice.toLocaleString("en-AU", {
            style: "currency",
            currency: "AUD",
          })}
        </p>

        {/* Price Change */}
        <p
          className={`${priceChangeClassName} ${
            price_change_24h >= 0 ? "text-green-500" : "text-red-500"
          } dark:text-gray-400`}
        >
          {price_change_24h >= 0
            ? `+${price_change_24h.toFixed(2)}%`
            : `${price_change_24h.toFixed(2)}%`}
        </p>
      </div>
    </div>
  );
};

export default AssetCard;

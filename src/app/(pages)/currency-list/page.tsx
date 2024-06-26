"use client";
import useSWR from "swr";
import { getCurrenciesFromDS } from "@/app/actions/currencies";
import { DataTable } from "@/app/components/ui/data-table";
import { columns } from "./columns";
import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import { MobileFriendlyTable } from "@/app/components/ui/mobile-data-table";

interface Currency {
  name: string;
  last: string;
  buy: string;
  sell: string;
  trading_activity: number;
  typical_hold_time: number;
  market_cap: string;
  rank: number;
  volume: string;
  circulating_supply: string;
  all_time_high: string;
  tradeable: boolean;
  low: string;
  high: string;
  "24h_ago": string;
  "7d_ago": string;
  "30d_ago": string;
  "1y_ago": string;
}

const CurrencyListPage = () => {
  const { data: currencies, error } = useSWR("currencies", getCurrenciesFromDS);

  if (error) return <div>Error fetching data</div>;
  if (!currencies) return <div>Loading...</div>;

  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl space-y-10 px-4">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Browse Currencies
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Understanding Your Rights and Responsibilities: Exploring Our Terms
            and Conditions
          </p>
        </div>
      </MaxWidthWrapper>
      {/* DataTable */}
      <div className="relative bg-transparent mt-[-40px] md:mt-[-130px] lg:mt-[-150px]">
        <svg
          style={{ marginBottom: "-80px" }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="rgb(249 250 251)"
            fillOpacity="1"
            d="M0,192L1440,160L1440,320L0,320Z"
          ></path>
        </svg>
        <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20 px-5 md:px-10 lg:px-12">
        <div className="block md:hidden">
        <MobileFriendlyTable data={currencies} />
      </div>
      <div className="hidden md:block">
        <DataTable columns={columns} data={currencies} />
      </div>
        </MaxWidthWrapper>
          
        </section>
        <svg
          style={{ marginTop: "-20px" }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="rgb(249 250 251)"
            fillOpacity="1"
            d="M0,256L1440,192L1440,0L0,0Z"
          ></path>
        </svg>
      </div>
    </>
  );
};

export default CurrencyListPage;

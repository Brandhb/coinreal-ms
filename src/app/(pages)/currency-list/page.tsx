'use client';

import { getCurrenciesFromDS } from "@/app/actions/currencies";
import { DataTable } from "@/app/components/ui/data-table";
import { useEffect, useState } from "react";
import { columns } from "./columns";

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
  //const data = await getCurrenciesFromDS();
  const [currencies, setCurrencies] = useState<Currency[]>([]);

  useEffect(() => {
    async function fetchCurrencies() {
      //debugger;
      const data = await getCurrenciesFromDS();
      setCurrencies(data);
    }
    fetchCurrencies();
  }, []);
  return (
    <>
      <h1>CurrencyListPage</h1>

      {/*<DataTable  />*/}
      <DataTable columns={columns} data={currencies} />
    </>
  );
};

export default CurrencyListPage;

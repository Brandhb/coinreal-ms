'use server'
import { CurrencyFromDS } from "@/lib/types/exchangeTypes";
import axios from "axios";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

export const getCurrenciesFromDS = async () => {
    //debugger;
    const baseURL = publicRuntimeConfig.baseURL;
    const response = await axios.get(`${baseURL}/api/currencies/browse-trending`);
    
    const data: Record<string, CurrencyFromDS> = response.data;

    // Convert the data to the desired currency format
    const convertedData = Object.entries(data).map(([key, value]) => ({
      token: key,
      ...value,
    }));
    return convertedData;
}

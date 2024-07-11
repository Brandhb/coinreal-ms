'use server'
import { CryptocurrencyFromCG, CurrencyFromDS } from "@/lib/types/exchangeTypes";
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


export const getAssetsFromCG = async () => {
  try {
    const baseURL = publicRuntimeConfig.baseURL;
    const response = await axios.get<CryptocurrencyFromCG[]>(`${baseURL}/api/currencies/crypto-assets`);

    // Extract only the first 5 items from the response data
    const data: CryptocurrencyFromCG[] = response.data.slice(0, 5);

    return data;
  } catch (error) {
    console.error("Error fetching cryptocurrencies:", error);
    throw error; // Rethrow the error so it can be caught by the caller
  }
};

export const getAssetByIdFromCG = async (id: string) => {
  try {
    const baseURL = publicRuntimeConfig.baseURL;
    const response = await axios.get<CryptocurrencyFromCG[]>(`${baseURL}/api/currencies/crypto-asset-by-id`, {
      params: {
        id,
      },
    });

    // Extract only the first 5 items from the response data
    const data: CryptocurrencyFromCG = response.data[0];
    return data;
  } catch (error) {
    console.error("Error fetching cryptocurrencies:", error);
    throw error; // Rethrow the error so it can be caught by the caller
  }
};
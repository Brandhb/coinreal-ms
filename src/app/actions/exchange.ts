// lib/actions.ts
import axios from "axios";

interface CreateTransactionData {
  from_amount: number;
  from_currency: string;
  to_currency: string;
  from_network?: string | null;
  to_network: string;
  payout_address: string;
  payout_extra_id?: string;
  deposit_type: string;
  payout_type: string;
  external_partner_link_id?: string;
  userId: string
  customer: {
    contact_info: {
      email: string;
      phone_number: string;
    };
  };
}

export const getCurrencies = async () => {
  const response = await axios.get("/api/currencies/available-currencies");
  return response.data;
};

export const getFiatCurrencies = async () => {
  //debugger;
  const response = await axios.get("/api/currencies/fiat-currencies");
  return response.data;
};

export const getMinExchangeAmount = async (from: string, to: string) => {
  const response = await axios.get("/api/currencies/min-exchange-amount", {
    params: { from, to },
  });
  return response.data;
};

export const getEstimatedAmount = async (
  amount: number,
  from: string,
  to: string
) => {
  const response = await axios.get("/api/currencies/estimate-amount", {
    params: { amount, from, to },
  });
  return response.data;
};

export const createTransaction = async (
  from: string,
  to: string,
  address: string,
  amount: number,
  userId: string,
  userEmail: string,
) => {
  const response = await axios.post("/api/currencies/create-transaction", {
    from,
    to,
    address,
    amount,
    userId,
    userEmail
  });
  return response.data;
};
export const createFiatTransaction = async (
  data: CreateTransactionData
) => {
  const response = await axios.post("/api/currencies/fiat-create-transaction", {
    data,
  });
  return response.data;
};

export const getTransactionStatus = async (transactionId: string) => {
  const response = await axios.get("/api/currencies/transaction-status", {
    params: { transactionId },
  });
  return response.data;
};

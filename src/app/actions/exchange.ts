// lib/actions.ts
import axios from 'axios';

export const getCurrencies = async () => {
  const response = await axios.get('/api/available-currencies');
  return response.data;
};

export const getMinExchangeAmount = async (from: string, to: string) => {
  const response = await axios.get('/api/min-exchange-amount', {
    params: { from, to }
  });
  return response.data;
};

export const getEstimatedAmount = async (amount: number, from: string, to: string) => {
  const response = await axios.get('/api/estimate-amount', {
    params: { amount, from, to }
  });
  return response.data;
};

export const createTransaction = async (from: string, to: string, address: string, amount: number) => {
  const response = await axios.post('/api/create-transaction', {
    from,
    to,
    address,
    amount
  });
  return response.data;
};

export const getTransactionStatus = async (transactionId: string) => {
  const response = await axios.get('/api/transaction-status', {
    params: { transactionId }
  });
  return response.data;
};

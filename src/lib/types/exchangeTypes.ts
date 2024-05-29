// Define the structure for a Currency
export interface Currency {
    ticker: string;
    name: string;
    image: string;
    hasExternalId: boolean;
    isFiat: boolean;
    featured: boolean;
    isStable: boolean;
    supportsFixedRate: boolean;
  }
  
  // Define the structure for the minimum exchange amount response
  export interface MinExchangeAmountResponse {
    from: string;
    to: string;
    min: number;
    max: number;
    rate: number;
    minerFee: number;
  }
  
  // Define the structure for the estimated exchange amount response
  export interface EstimatedAmountResponse {
    estimatedAmount: number;
    transactionSpeedForecast: string;
    warningMessage: string | null;
  }
  
  // Define the structure for the create transaction request
  export interface CreateTransactionRequest {
    from: string;
    to: string;
    address: string;
    amount: number;
    extraId?: string;
    userId?: string;
    contactEmail?: string;
    refundAddress?: string;
    refundExtraId?: string;
  }
  
  // Define the structure for the create transaction response
  export interface CreateTransactionResponse {
    payinAddress: string;
    payoutAddress: string;
    payoutExtraId: string;
    fromCurrency: string;
    toCurrency: string;
    refundAddress: string;
    refundExtraId: string;
    id: string;
    amount: number;
  }
  
  // Define the structure for the transaction status response
  export interface TransactionStatusResponse {
    status: string;
    payinAddress: string;
    payoutAddress: string;
    fromCurrency: string;
    toCurrency: string;
    id: string;
    updatedAt: string;
    expectedSendAmount: number;
    expectedReceiveAmount: number;
    createdAt: string;
    isPartner: boolean;
  }
  
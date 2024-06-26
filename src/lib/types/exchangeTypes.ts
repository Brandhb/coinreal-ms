export interface CurrencyFromDS {
  token?: string;
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
// Define the structure for a Currency
export interface Currency {
  id: string | number | null | undefined;
  ticker: string;
  name: string;
  logo_url: string;
  // Optional fields from FiatCurrency
  currency_type?: string;
  enable?: boolean;
  has_external_id?: boolean;
  is_featured?: boolean;
  is_stable?: boolean;
  is_available?: boolean;
  payment_methods?: PaymentMethod[];
  block_explorer_url_mask?: string | null;
  default_exchange_value?: number;
  networks?: Network[];
  // Optional fields from CryptoCurrency
  image?: string;
  hasExternalId?: boolean;
  isFiat?: boolean;
  featured?: boolean;
  isStable?: boolean;
  supportsFixedRate?: boolean;
  network?: string;
  tokenContract?: string;
  legacyTicker?: string;
}

interface PaymentMethod {
  type: string;
  deposit_enabled: boolean;
  withdrawal_enabled: boolean;
}

interface Network {
  name: string;
  network: string;
  block_explorer_url_mask: string | null;
  payment_methods: PaymentMethod;
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

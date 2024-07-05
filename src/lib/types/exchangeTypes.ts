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
export interface AssetFromDS {
  code: string;
  name: string;
  tradeable: boolean;
  decimal_places: number;
  min_amount: string;
  step_size: string;
  min_withdrawal_amount: string;
  withdrawal_step_size: string;
  withdrawal_fee: string;
  withdrawals_enabled: boolean;
  deposits_enabled: boolean;
  withdrawal_note: string;
  deposit_note: string;
  min_confirmations: number;
  default_network: string;
  default_network_name: string;
  rank: number;
  color: string;
  description: string;
  website: string;
  image: string;
  stakeable: boolean;
  rtcompat: boolean;
  swaps_enabled: boolean;
  swap_rate_offset: string;
  triggers_enabled: boolean;
  recurring_enabled: boolean;
  max_order_size_value: string;
  delisted: boolean;
}

export interface CryptocurrencyFromCG {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  fully_diluted_valuation: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  roi: null | {
    times: number;
    currency: string;
    percentage: number;
  };
  last_updated: string;
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

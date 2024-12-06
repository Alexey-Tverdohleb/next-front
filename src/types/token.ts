export type PolicyId = string;
export type TokenName = string;

export type TokenStatus = 'unverified' | 'verified';

export type TokenPriceValue = {
  base: string;
  quote: string;
};

export type TokenAddress = {
  policyId: string;
  name: string;
};

export type TokenSupply = {
  total: string;
  circulating: string;
};

export type TokenPriceChange = {
  '24h': number;
  '7d': number;
};

export interface ICategory {
  [id: string]: {
    index: number;
    name: string;
    description: string;
  };
}

export interface ITokenInfo {
  website: string;
  symbol: string;
  supply: TokenSupply;
  status: TokenStatus;
  image: string;
  description: string;
  decimalPlaces: number;
  address: TokenAddress;
  categories: string[];
}

export interface ITokenPrice {
  volume: TokenPriceValue;
  volumeChange: TokenPriceValue;
  volumeTotal: TokenPriceValue;
  volumeAggregator: TokenPriceValue;
  price: number;
  askPrice: number;
  bidPrice: number;
  priceChange: TokenPriceChange;
  quoteDecimalPlaces: number;
  baseDecimalPlaces: number;
  price10d: number[];
  baseAddress: TokenAddress;
  quoteAddress: TokenAddress;
}

export interface IToken {
  info: ITokenInfo;
  price: ITokenPrice;
}

export interface ICallTable {
  price: {
    amount: number;
    bid: number;
    ask: number;
  };
  strike_price: {
    amount: number;
    fiat_amount: string;
  };
  expire_date: string;
  min_price: {
    amount: number;
    fiat_amount: string;
  };
  max_price: {
    amount: number;
    fiat_amount: string;
  };
  volume: {
    amount: number;
    fiat_amount: string;
  };
  price_change: string;
}

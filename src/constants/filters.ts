export enum MY_TRADES_FILTERS {
  tokenName = 'tokenName',
  startDate = 'date-gte',
  endDate = 'date-lte',
  status = 'status',
}

export enum OPTIONS_HISTORY_FILTERS {
  tokenName = 'oph-tokenName',
  startDate = 'oph-date-gte',
  endDate = 'oph-date-lte',
  optionType = 'oph-type',
}

export enum MY_OPTIONS_FILTERS {
  tokenName = 'mo-tokenName',
  startDate = 'mo-date-gte',
  endDate = 'mo-date-lte',
}

export enum ISSUED_OPTIONS_FILTERS {
  tokenName = 'iss-tokenName',
  startDate = 'iss-date-gte',
  endDate = 'iss-date-lte',
}

export enum MARKETS_FILTERS {
  tokenName = 'tokenName',
  tokenVerified = 'tokenVerified',
  base = 'tokenBase',
  classification = 'tokenClass',
}

export enum MARKET_DETAILS_FILTERS {
  expStartDate = 'exp-date-gte',
  expEndDate = 'exp-date-lte',
  strikePriceFrom = 'strike-price-gte',
  strikePriceTo = 'strike-price-lte',
  volumeFrom = 'volume-gte',
  volumeTo = 'volume-lte',
}

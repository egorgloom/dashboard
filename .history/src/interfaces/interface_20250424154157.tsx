
export interface ILocation {
  lat?: string;
  lng?: string;
  country?: string;
}

export interface IHistoricalMetrics {
  timestamp?: string[];
  responseTime?: number[];
  rps?: number[];
  cpu?: number[];
  memory?: number[];
}

export interface IHistoricalData {
  h1?: IHistoricalMetrics;
  h6?: IHistoricalMetrics;
  h12?: IHistoricalMetrics;
}

export interface IMetrics {
  id?: string;
  server?: string;
  errors?: string;
  activeUsers?: string;
  location?: ILocation;
  historicalData?: IHistoricalData ;
}



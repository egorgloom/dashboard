
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
export interface IErrors {
  h1: IErrorCount[];
  h6: IErrorCount[];
  h12: IErrorCount[];
}
export interface IErrorCount {
  timestamp: string;
  count4xx: number;
  count5xx: number;
}
export interface IMetrics {
  id?: string;
  server?: string;
  errors?: IErrors;
  activeUsers?: string;
  location?: ILocation;
  historicalData?: IHistoricalData ;
}



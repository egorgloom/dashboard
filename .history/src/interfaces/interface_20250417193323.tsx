export interface HistoricalData {
  timestamp: string[];
  responseTime: number[];
  rps: number[];
  cpu: number[];
  memory: number[];
}

export interface Location {
  lat: string;
  lng: string;
  country: string;
  historicalData: HistoricalData;
}

export interface IMetrics {
  id: string;
  server: string;
  responseTime: string;
  rps: string;
  errors: string;
  activeUsers: string;
  cpu: string;
  memory: string;
  location?: Location;
}

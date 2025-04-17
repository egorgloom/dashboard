// export interface IMetrics {
//   id?: number,
//   server?: string,
//   responseTime?: number,
//   rps?: number,
//   errors?: number,
//   activeUsers?: number,
//   cpu?: number,
//   memory?: number,
//   location?: {
//     lat?: string,
//     lng?: string,
//     country?: string,
//     historicalData?: {
//       timestamp?: string[] | undefined,
//       responseTime?: number[] | undefined,
//       rps?: number[] | undefined,
//       cpu?: number[] | undefined,
//       memory?: number[] | undefined
//     }
//   }
// }

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

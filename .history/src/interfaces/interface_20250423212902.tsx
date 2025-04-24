// export interface HistoricalData {
//   timestamp: string[];
//   responseTime: number[];
//   rps: number[];
//   cpu: number[];
//   memory: number[];
// }

// export interface Location {
//   lat: string;
//   lng: string;
//   country: string;
//   historicalData: HistoricalData;
// }

// export interface IMetrics {
//   id: string;
//   server: string;
//   responseTime: string;
//   rps: string;
//   errors: string;
//   activeUsers: string;
//   cpu: string;
//   memory: string;
//   location?: Location;
// }


export interface ITimestampData {
  timestamp: string[];
  responseTime: number[];
  rps: number[];
  cpu: number[];
  memory: number[];
}


export interface IHistoricalData {
  h1?: ITimestampData;
  h6?: ITimestampData;
  h12?: ITimestampData;
}


export interface ILocation {
  lat?: string;
  lng?: string; 
  country?: string;

}


export interface IMetrics {
  id?: string;
  server?: string;
  responseTime?: string;
  rps?: string;
  errors?: string;
  activeUsers?: string;
  cpu?: string;
  memory?: string;
  location?: ILocation;
  historicalData?: IHistoricalData;
}

type ServersArray = IMetrics[];


// export interface IMetrics {
//   id?: string;
//   server?: string;
//   responseTime?: string;
//   rps?: string;
//   errors?: string;
//   activeUsers?: string;
//   cpu?: string;
//   memory?: string;
//   location?: {
//     lat?: string;
//     lng?: string;
//     country?: string;
//   };
//   historicalData?: {
//     h1?: {
//       timestamp: string[];
//       responseTime: number[];
//       rps: number[];
//       cpu: number[];
//       memory: number[];
//     };
//     h6?: {
//       timestamp: string[];
//       responseTime: number[];
//       rps: number[];
//       cpu: number[];
//       memory: number[];
//     };
//     h12?: {
//       timestamp: string[];
//       responseTime: number[];
//       rps: number[];
//       cpu: number[];
//       memory: number[];
//     };
//   };
// }

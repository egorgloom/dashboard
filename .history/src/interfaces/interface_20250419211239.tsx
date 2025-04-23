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
// Тип для массивов чисел и строк

interface ITimestampData {
  timestamp: string[];
  responseTime: number[]; 
  rps: number[]; 
  cpu: number[]; 
  memory: number[]; 
}


interface IHistoricalDataLevel {
  [key: string]: ITimestampData; 
}


interface IHistoricalData {
  h1: ITimestampData;
  h6: ITimestampData;
  h12: ITimestampData;
}


interface ILocation {
  lat: string;
  lng: string; 
  country: string;
  historicalData: IHistoricalData;
}


interface IMetrics {
  id: string;
  server: string;
  responseTime: string;
  rps: string;
  errors: string;
  activeUsers: string;
  cpu: string;
  memory: string;
  location: Location;
}






export interface IMetrics {
  id?: string;
  server?: string;

  errors?: string;
  activeUsers?: string;

  location?: {
    lat?: string;
    lng?: string;
    country?: string;
  };
  historicalData?: {
    h1?: {
      timestamp?: string[];
      responseTime: number[];
      rps: number[];
      cpu: number[];
      memory: number[];
    };
    h6?: {
      timestamp?: string[];
      responseTime: number[];
      rps: number[];
      cpu: number[];
      memory: number[];
    };
    h12?: {
      timestamp?: string[];
      responseTime: number[];
      rps: number[];
      cpu: number[];
      memory: number[];
    };
  };
}

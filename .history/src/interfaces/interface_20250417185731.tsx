export interface IMetrics {
  id?: number,
  server?: string,
  responseTime?: number,
  rps?: number,
  errors?: number,
  activeUsers?: number,
  cpu?: number,
  memory?: number,
  location?: {
    lat?: string,
    lng?: string,
    country?: string,
    historicalData?: {
      timestamp?: string[],
      responseTime?: number[],
      rps?: number[],
      cpu?: number[],
      memory?: number[]
    }
  }
}
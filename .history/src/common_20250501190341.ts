import { IErrorCount, IMetrics } from "./interfaces/interface";

export function calculateAverage(arr: number[]): number {
    if (arr.length === 0) return 0;
    const sum = arr.reduce((acc, val) => acc + val, 0);
    return Math.round(sum / arr.length);
  }

  export function getTotalCountErrors(data: IMetrics | undefined, sectionKey: string): number[] {
    if (!data || !data?.errors || !data?.errors?.[sectionKey]) {
        return [0];
    }

    const entries = data?.errors?.[sectionKey];

    const sum1 = entries?.reduce((total: number, entry: IErrorCount) => {
        return total + (entry.count4xx || 0);
    }, 0);

    const sum2 = entries?.reduce((total: number, entry: IErrorCount) => {
        return total + (entry.count5xx || 0);
    }, 0);

    return [sum1, sum2]
}

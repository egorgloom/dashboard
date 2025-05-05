import { IErrorCount, IMetrics } from "./interfaces/interface";

export function calculateAverage(arr: number[]): number {
    if (arr.length === 0) return 0;
    const sum = arr.reduce((acc, val) => acc + val, 0);
    return Math.round(sum / arr.length);
  }

  export function getTotalCountErrors(data: IMetrics | undefined, sectionKey: string): Array<{ '4xx': number } | { '5xx': number }> {
    if (!data || !data?.errors || !data?.errors?.[sectionKey]) {
      return [{ '4xx': 0 }, { '5xx': 0 }];
    }

    const entries = data?.errors?.[sectionKey];

    const sum1 = entries?.reduce((total: number, entry: IErrorCount) => {
        return total + (entry.count4xx || 0);
    }, 0);

    const sum2 = entries?.reduce((total: number, entry: IErrorCount) => {
        return total + (entry.count5xx || 0);
    }, 0);

    return [{'4xx': sum1}, {'5xx' : sum2}]
}

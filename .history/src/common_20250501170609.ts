export function calculateAverage(arr: number[]): number {
    if (arr.length === 0) return 0;
    const sum = arr.reduce((acc, val) => acc + val, 0);
    return Math.round(sum / arr.length);
  }

  export function calculateCount(arr: any[]): any {
    if(arr.length === 0) return 0;
    const sum = arr.reduce((elem, v) => elem + v, 0)
    return sum
  }

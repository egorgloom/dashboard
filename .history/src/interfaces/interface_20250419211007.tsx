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
type StringArray = string[];
type NumberArray = number[];

// Информация о временной метке
interface ITimestampData {
  timestamp: string[]; // Массив строк с временными метками
  responseTime: number[]; // Массив чисел с временем отклика
  rps: number[]; // Массив чисел с RPS
  cpu: number[]; // Массив чисел с загрузкой CPU
  memory: number[]; // Массив чисел с использованием памяти
}

// Отдельный объект для каждого уровня исторических данных
interface IHistoricalDataLevel {
  [key: string]: ITimestampData; // ключи: h1, h6, h12
}

// Основной объект для исторических данных
interface IHistoricalData {
  h1: ITimestampData;
  h6: ITimestampData;
  h12: ITimestampData;
}

// Объект расположения
interface ILocation {
  lat: string; // предполагается, что строки могут быть пустыми
  lng: string; // предполагается, что строки могут быть пустыми
  country: string;
  historicalData: IHistoricalData;
}

// Главный интерфейс объекта JSON
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

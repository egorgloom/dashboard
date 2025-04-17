import React from 'react';
import { useState } from 'react';
import { FC } from 'react';

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from 'recharts';

import { IMetrics } from '../../interfaces/interface';

interface IMetricsChart {
    item: any,
    elem1: any,
    elem2: any,
    elem3: any
}

interface HistoricalData {
    timestamp: string[];
    responseTime: number[];
    rps: number[];
    cpu: number[];
    memory: number[];
}


const MetricsChart: FC<IMetricsChart> = ({item, elem1, elem2, elem3}) => {

    const { historicalData } = item;

    // Создаем массив данных для графика
    const chartData = historicalData?.timestamp?.map((time: any, index: any) => ({
      name: time,
      ResponseTime: historicalData.responseTime[index],
      RPS: historicalData.rps[index],
      CPU: historicalData.cpu[index],
      Memory: historicalData.memory[index],
    })) || [];
  
    const [state, setState] = useState({ elem1, elem2, elem3 });
    console.log(state);
  
    // Можно добавить функцию для динамического обновления данных или выбора элементов
    // Например, выбрать, какие линии отображать
    // Но для простоты отрисуем все три

  return (
    <>
        <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        // data={chartData}
        margin={{
          right: 30,
        }}
      >
        <CartesianGrid strokeDasharray="1 1" />
        <XAxis dataKey="name" />
        <YAxis />

        <Legend />
        <Line type="monotone" dataKey="ResponseTime" stroke="#3b82f6" />
        <Line type="monotone" dataKey="RPS" stroke="#8b5cf6" />
      </LineChart>
    </ResponsiveContainer>
    </>
  );
};

export default MetricsChart;


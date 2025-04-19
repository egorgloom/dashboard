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
    elem3: any,
    title1?: string,
    title2?: string
}

interface HistoricalData {
    timestamp: string[];
    responseTime: number[];
    rps: number[];
    cpu: number[];
    memory: number[];
}


const MetricsChart: FC<IMetricsChart> = ({item, elem1, elem2, elem3, title1, title2}) => {

    const { historicalData } = item;

    // Создаем массив данных для графика
    // const chartData = historicalData?.timestamp?.map((time: any, index: any) => ({
    //   name: time,
    //   [historicalData.responseTime]: elem2[index],
    //   param3: elem3[index],
    //   ResponseTime: historicalData.responseTime[index],
    //   RPS: historicalData.rps[index],
    //   CPU: historicalData.cpu[index],
    //   Memory: historicalData.memory[index],
    // })) || [];
    const chartData = historicalData?.timestamp?.map((time, index) => {
        const dataPoint: any = {
          name: time,
        };
      
        dataPoint[elem1] = historicalData.responseTime[index];
        dataPoint[elem2] = historicalData.rps[index];
        dataPoint[elem3] = historicalData.cpu[index];
        // Если нужно, добавьте memory или другие параметры
      
        return dataPoint;
      });
  

    console.log(chartData);
  
    // Можно добавить функцию для динамического обновления данных или выбора элементов
    // Например, выбрать, какие линии отображать
    // Но для простоты отрисуем все три

  return (
    <>
        <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={chartData}
        margin={{
          right: 30,
        }}
      >
        <CartesianGrid strokeDasharray="1 1" />
        <XAxis dataKey="name" />
        <YAxis />

        <Legend />
        <Line type="monotone" dataKey='param2' stroke="#3b82f6" />
        <Line type="monotone" dataKey='param3' stroke="#8b5cf6" />
      </LineChart>
    </ResponsiveContainer>
    </>
  );
};

export default MetricsChart;


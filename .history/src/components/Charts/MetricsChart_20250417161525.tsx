import React from 'react';
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
    elem2: any,
    elem3: any
}

const MetricsChart: FC<IMetricsChart> = ({item, elem2, elem3}) => {

    const { historicalData } = item;
    const chartData = historicalData.timestamp.map((time: number, index: number) => ({
        name: time,
        ResponseTime: historicalData.responseTime[index],
        RPS: historicalData.rps[index],
    }));
console.log(chartData)
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
        <Line type="monotone" dataKey="ResponseTime" stroke="#3b82f6" />
        <Line type="monotone" dataKey="RPS" stroke="#8b5cf6" />
      </LineChart>
    </ResponsiveContainer>
    </>
  );
};

export default MetricsChart;


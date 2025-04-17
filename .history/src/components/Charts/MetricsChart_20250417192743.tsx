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



interface HistoricalData {
    timestamp?: string[],
    responseTime?: number[],
    rps?: number[],
    cpu?: number[],
    memory?: number[]
  }

interface IMetricsChart {
    item: IMetrics,
    elem2?: number[],
    elem3?: number[],
    title1: string,
    title2: string
} 


const MetricsChart: FC<IMetricsChart> = ({item, elem2, elem3, title1, title2}) => {

    console.log("elem2", elem2)
    const chartData = item?.location?.historicalData?.timestamp?.map((time: string, index: number) => ({
      name: time,
      param2: elem2?.[index],
      param3: elem3?.[index],
    })) || [];


  return (
    <>
        <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={400}
        data={chartData}
        margin={{
          right: 30,
        }}
      >
        <CartesianGrid strokeDasharray="1 1" />
        <XAxis dataKey="name" />
        <YAxis />

        <Legend />
        <Line type="monotone" dataKey='param2' name={title1} stroke="#3b82f6" />
        <Line type="monotone" dataKey='param3' name={title2} stroke="#8b5cf6" />
      </LineChart>
    </ResponsiveContainer>
    </>
  );
};

export default MetricsChart;


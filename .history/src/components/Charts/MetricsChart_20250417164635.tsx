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
    elem1: any,
    elem2: any,
    elem3: any,
}

interface HistoricalData {
    timestamp: string[];
    responseTime: number[];
    rps: number[];
    cpu: number[];
    memory: number[];
}

const MetricsChart: FC<IMetricsChart> = ({ item, elem1, elem2, elem3 }) => {
    const { historicalData } = item;

    const transformData = <T extends keyof HistoricalData>(
        data: HistoricalData,
        elem1: T,
        elem2: T,
        elem3: T
    ): Array<Record<T, string | number>> => {
        const result: Array<Record<T, string | number>> = [];
        const length = data[elem1].length; // Предполагается, что все массивы имеют одинаковую длину

        for (let i = 0; i < length; i++) {
            const obj: Record<T, string | number> = {} as Record<T, string | number>;
            obj[elem1] = data[elem1][i];
            obj[elem2] = data[elem2][i];
            obj[elem3] = data[elem3][i];
            result.push(obj);
        }
        
        return result;
    };

    // Преобразование данных для графика
    const chartData = transformData(historicalData, elem1, elem2, elem3);

    return (
        <>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    data={chartData}
                    margin={{
                        right: 30,
                    }}
                >
                    <CartesianGrid strokeDasharray="1 1" />
                    <XAxis dataKey="name" />
                    <YAxis />

                    <Legend />
                    <Line type="monotone" dataKey={elem1} stroke="#3b82f6" />
                    <Line type="monotone" dataKey={elem2} stroke="#8b5cf6" />
                </LineChart>
            </ResponsiveContainer>
        </>
    );
};

export default MetricsChart;

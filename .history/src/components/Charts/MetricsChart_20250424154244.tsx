import React from 'react';
import { useState } from 'react';
import { FC } from 'react';

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Legend,
    ResponsiveContainer,
} from 'recharts';
import { IMetrics } from '../../interfaces/interface';




interface IMetricsChart {
    item: IMetrics,
    elem2?: number[],
    elem3?: number[],
    title1: string,
    title2: string
}


const MetricsChart: FC<IMetricsChart> = React.memo(({ item, elem2, elem3, title1, title2 }) => {

    const chartData = item?.historicalData?.h6?.timestamp?.map((time: string, index: number) => ({
        param1: time,
        param2: elem2?.[index],
        param3: elem3?.[index],
    })) || [];
)
    return (
        <>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    data={chartData}
                >
                    <CartesianGrid strokeDasharray="1 1" />
                    <XAxis dataKey="param1" />
                    <YAxis />
                    <Legend />
                    <Line type="monotone" dataKey='param2' name={title1} stroke="#3b82f6" />
                    <Line type="monotone" dataKey='param3' name={title2} stroke="#8b5cf6" />
                </LineChart>
            </ResponsiveContainer>
        </>
    );
});

export default MetricsChart;


import React from 'react';
import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useGetItemMetricQuery, useGetMetricsQuery } from '../../API/metricsSlice';
import { IErrorCount, IErrors, IMetrics } from '../../interfaces/interface';
import AutorefreshToggle from '../AutorefreshToggle/AutorefreshToggle';


import MetricsChart from '../Charts/MetricsChart';
import DiskUsageIndicator from '../DiskUsageIndicator/DiskUsageIndicator';


const SingleServerMetrics: FC = () => {

    const { id } = useParams<{ id: string }>();

    const { refetch, isLoading, isError, isUninitialized } = useGetMetricsQuery();

    const { data } = useGetItemMetricQuery(Number(id))


    function getTotalCount4xx(data: IMetrics | undefined, sectionKey: string): number[] {
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

    console.log(getTotalCount4xx(data, 'h1'))

    return (
        <>
            <div className='single-item'>
                <h2 className='single-item__header'>{data?.server} Server Details</h2>
                <div>
                    {/* <AutorefreshToggle refetch={refetch}
                        isUninitialized={isUninitialized}
                        isLoading={isLoading} /> */}
                </div>
                <div className='single-item__block'>
                    <div className='single-item__block-metric'>
                        <p className='single-item__block-metric__header'>Perfomance meetrics</p>
                        <MetricsChart
                            item={data}
                            elem2={data?.historicalData?.h1?.responseTime}
                            elem3={data?.historicalData?.h1?.rps}
                            title1={'Response Time'}
                            title2={'PRS'}
                        />
                    </div>
                    <div className='single-item__block-metric'>
                        <p className='single-item__block-metric__header'>Resource usage</p>
                        <MetricsChart
                            item={data}
                            elem2={data?.historicalData?.h1?.cpu}
                            elem3={data?.historicalData?.h1?.memory}
                            title1={'Memory'}
                            title2={'CPU'}
                        />
                    </div>
                </div>
                <DiskUsageIndicator elem={data}
                // isLoading={isLoading} 
                // isError={isError}
                />

                <section className="system-resources">
                    <h2 className='single-item__header'>Recent Errors</h2>
                    <div className='system-resources__wrapper '>
                        {data?.errors?.h1?.map((err: IErrorCount, i: number) =>

                            <>
                                <div>
                                    <h4>4xx Error</h4>
                                    <span>Count: </span>
                                </div>
                                <div>
                                    <h4>5xx Error</h4>
                                    <span>Count: </span>
                                </div>
                            </>   
                            
                        )}
                    </div>
                </section>
            </div>
        </>
    );
};

export default SingleServerMetrics;
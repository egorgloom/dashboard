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
                {data?.errors?.h1?.map((err: IErrorCount) => 

                <>
                <div key={err.count4xx}>4xx Error: {err.count4xx}</div>
                <div key={err.count5xx}>5xx Error: {err.count5xx}</div>
                </>
                )}


                </section>
            </div>
        </>
    );
};

export default SingleServerMetrics;
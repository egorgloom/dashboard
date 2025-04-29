import React from 'react';
import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useGetItemMetricQuery, useGetMetricsQuery } from '../../API/metricsSlice';
import AutoRefresher from '../Button/AutoRefresher';

import MetricsChart from '../Charts/MetricsChart';


const SingleServerMetrics: FC = () => {

    const { id } = useParams<{ id: string }>();

    const { refetch, isLoading, isUninitialized } = useGetMetricsQuery();

    const { data } = useGetItemMetricQuery(Number(id))

    console.log('SingleServerMetrics', data)

    return !data ? (<div>Loading</div>) : (
        <>
            <div className='single-item'>
                <h2 className='single-item__header'>{data?.server} Server Details</h2>
                <div>
                    <AutoRefresher       refetch={refetch} 
      isUninitialized={isUninitialized} 
      isLoading={isLoading} />
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
                <section className="system-resources">
                    <h2 className="system-resources__header">System Resources</h2>
                    <div className="system-resources__wrapper">
                        <div className="system-resources__wrapper__resource-item">
                            <span className="system-resources__wrapper__resource-item__label">CPU Usage</span>
                            <span className="system-resources__wrapper__resource-item__value">Меняй%</span>
                        </div>
                        <div className="system-resources__wrapper__resource-item">
                            <span className="system-resources__wrapper__resource-item__label">Memory Usage</span>
                            <span className="system-resources__wrapper__resource-item__value">Меняй%</span>
                        </div>
                        <div className="system-resources__wrapper__resource-item">
                            <span className="system-resources__wrapper__resource-item__label">Disk Usage</span>
                            <span className="system-resources__wrapper__resource-item__value">71%</span>
                        </div>
                    </div>
                </section>

            </div>
        </>
    );
};

export default SingleServerMetrics;
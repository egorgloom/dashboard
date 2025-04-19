import React from 'react';
import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useGetItemMetricQuery } from '../../API/metricsSlice';
import { IMetrics } from '../../interfaces/interface';
import MetricsChart from '../Charts/MetricsChart';

interface ISingleServerMetrics { }

const SingleServerMetrics: FC<ISingleServerMetrics> = () => {

    const { id } = useParams<{ id: string }>();

    const { data } = useGetItemMetricQuery(Number(id))

    return !data ? (<div>Loading</div> ) : (
        <>
            <div className='single-item'>
                <h2 className='single-item__header'>{data?.server} Server Details</h2>
                <div className='single-item__block'>
                    <div className='single-item__block-metric'>
                        <p className='single-item__block-metric__header'>Perfomance meetrics</p>
                        <MetricsChart 
                        item={data.location?.historicalData} 
                        elem2={data.location?.historicalData?.responseTime} 
                        elem3={data.location?.historicalData?.rps}
                        title1={'Response Time'}
                        title2={'PRS'}
                        />

                    </div>
                    <div className='single-item__block-metric'>
                        <p className='single-item__block-metric__header'>Resource usage</p>

                        </div>
                </div>
                <section className="system-resources">
                    <h2 className="system-resources__header">System Resources</h2>
                    <div className="system-resources__wrapper">
                        <div className="system-resources__wrapper__resource-item">
                            <span className="system-resources__wrapper__resource-item__label">CPU Usage</span>
                            <span className="system-resources__wrapper__resource-item__value">{data?.cpu}%</span>
                        </div>
                        <div className="system-resources__wrapper__resource-item">
                            <span className="system-resources__wrapper__resource-item__label">Memory Usage</span>
                            <span className="system-resources__wrapper__resource-item__value">{data?.memory}%</span>
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
import React from 'react';
import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useGetItemMetricQuery } from '../../API/metricsSlice';
import MetricsChart from '../Charts/MetricsChart';

interface ISingleServerMetrics { }

const SingleServerMetrics: FC<ISingleServerMetrics> = () => {

    const { id } = useParams();

    const { data } = useGetItemMetricQuery({ id })

    console.log(data)
    return (
        <>
            <div className='single-item'>
                <h2 className='single-item__header'>{data?.server} Server Details</h2>
                <div className='single-item__block'>
                    <div className='single-item__block-metric'>
                        <p className='single-item__block-metric__header'>Perfomance meetrics</p>
                        <MetricsChart />
                    </div>
                    <div className='single-item__block-metric'>
                        <p className='single-item__block-metric__header'>Resource usage</p></div>
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
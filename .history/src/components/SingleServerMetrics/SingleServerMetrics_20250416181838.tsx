import React from 'react';
import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useGetItemMetricQuery } from '../../API/metricsSlice';

import cl from './SingleServerMetrics.module.scss'

interface ISingleServerMetrics {}

const SingleServerMetrics: FC<ISingleServerMetrics> = () => {

    const {id} = useParams();

    const {data} = useGetItemMetricQuery({id})

    console.log(data)
  return (
    <>
    <h2 className={cl.single}>{data?.server} Server Details</h2>
    <div className='single-item--metric'>Perfomance meetrics</div>
    <div className='single-item--metric'>Resource usage</div>
    <div className="single-item--system-resource">
        <h3>system-resource</h3>
        <div className="all-cards--card--data--info--label">CPU usage</div>
            <div className="all-cards--card--data--info--value">data</div>
            <div className="all-cards--card--data--info--label">Memory usage</div>
            <div className="all-cards--card--data--info--value">data</div>
            <div className="all-cards--card--data--info--label">Disk usage</div>
            <div className="all-cards--card--data--info--value">data</div>
    </div>

    </>
  );
};

export default SingleServerMetrics;
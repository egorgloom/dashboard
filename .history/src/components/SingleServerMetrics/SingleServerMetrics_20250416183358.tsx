import React from 'react';
import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useGetItemMetricQuery } from '../../API/metricsSlice';

interface ISingleServerMetrics {}

const SingleServerMetrics: FC<ISingleServerMetrics> = () => {

    const {id} = useParams();

    const {data} = useGetItemMetricQuery({id})

    console.log(data)
  return (
    <>
    <div className='single-item'>
    <h2 className='single-item--header'>{data?.server} Server Details</h2>
    <div>
    <div className='single-item--metric'>Perfomance meetrics</div>
    <div className='single-item--metric'>Resource usage</div>
    </div>
    <div className="single-item--system-resource">
        <h3>system-resource</h3>
        <div className="all-cards--card--data--info--label">CPU usage</div>
            <div className="all-cards--card--data--info--value">data</div>
            <div className="all-cards--card--data--info--label">Memory usage</div>
            <div className="all-cards--card--data--info--value">data</div>
            <div className="all-cards--card--data--info--label">Disk usage</div>
            <div className="all-cards--card--data--info--value">data</div>
    </div>

    </div>
    </>
  );
};

export default SingleServerMetrics;
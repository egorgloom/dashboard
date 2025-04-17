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
    <div>{data?.server}</div>
    </>
  );
};

export default SingleServerMetrics;
import React, { useMemo } from 'react';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { IHistoricalData, IHistoricalMetrics, IMetrics } from '../../interfaces/interface';


interface IItemCard {
  elem: IMetrics
}

const ItemCard: FC<IItemCard> = ({ elem }) => {

  function calculateAverage(arr: number[]): number {
    if (arr.length === 0) return 0;
    const sum = arr.reduce((acc, val) => acc + val, 0);
    return sum / arr.length;
  }
  
 
  function getAverageMetrics(elem: any): { cpu: number; memory: number; responseTime: number; rps: number } {

    const timeFrameKey = Object.keys(elem.historicalData)[0];

    const historical = elem.historicalData[timeFrameKey];
  
    const avgCpu = calculateAverage(historical.cpu);
    const avgMemory = calculateAverage(historical.memory);
    const avgResponseTime = calculateAverage(historical.responseTime);
    const avgRps = calculateAverage(historical.rps);
  
    return {
      cpu: avgCpu,
      memory: avgMemory,
      responseTime: avgResponseTime,
      rps: avgRps,
    };
  }
  
const averages = getAverageMetrics(elem);
console.log(averages.responseTime);

  return (
    <>
      <div className='item'>
        <Link to={`/metrics/${elem.id}`}>
          <div className="item__name">
            <h2 className="item__name__header">{elem.server} Server</h2>
            <span className="item__name__server">server-{elem.id}</span>
          </div>
          <div className="item__data">
            <div className="item__data__info">
              <span className="item__data__info__name">Response Time</span>
              <span className="item__data__info__value">{averages.responseTime}ms</span>
            </div>
            <div className="item__data__info">
              <span className="item__data__info__name">RPS</span>
              <span className="item__data__info__value">{averages.rps}</span>
            </div>
            <div className="item__data__info">
              <span className="item__data__info__name">CPU</span>
              <span className="item__data__info__value">{averages.cpu}%</span>
            </div>
            <div className="item__data__info">
              <span className="item__data__info__name">Memory</span>
              <span className="item__data__info__value">{averages.memory}%</span>
            </div>
          </div>
          <div className="item__location">
            <div className="item__data__info__name">Location</div>
            <div className="item__data__info__value">{elem?.location?.country}</div>
          </div>


        </Link>
      </div>
    </>
  );
};

export default ItemCard;
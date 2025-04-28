import React, { useMemo } from 'react';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { IHistoricalData, IHistoricalMetrics, IMetrics } from '../../interfaces/interface';


interface IItemCard {
  elem: any
}

const ItemCard: FC<IItemCard> = ({ elem }) => {

  function getAverageResponseTime(elem: IHistoricalMetrics): number {
    return calculateAverage(elem.responseTime);
  }
  console.log(getAverageResponseTime(elem))
  function getAverageRPS(elem: IHistoricalMetrics): number {
    return calculateAverage(elem.rps);
  }
  
  function getAverageCPU(elem: IHistoricalMetrics): number {
    return calculateAverage(elem.cpu);
  }
  
  function getAverageMemory(elem: IHistoricalMetrics): number {
    return calculateAverage(elem.memory);
  }
  
  // Общая функция для вычисления среднего
  function calculateAverage(numbers: number[]): number {
    if (numbers.length === 0) {
      return 0; // Или выбросить исключение, если нужно
    }
    const sum = numbers.reduce((acc, val) => acc + val, 0);
    return sum / numbers.length;
  }

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
              <span className="item__data__info__value">ms</span>
            </div>
            <div className="item__data__info">
              <span className="item__data__info__name">RPS</span>
              <span className="item__data__info__value"></span>
            </div>
            <div className="item__data__info">
              <span className="item__data__info__name">CPU</span>
              <span className="item__data__info__value">%</span>
            </div>
            <div className="item__data__info">
              <span className="item__data__info__name">Memory</span>
              <span className="item__data__info__value">%</span>
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
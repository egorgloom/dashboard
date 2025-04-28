import React, { useMemo } from 'react';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { IMetrics } from '../../interfaces/interface';


interface IItemCard {
  elem: IMetrics
}

const ItemCard: FC<IItemCard> = ({ elem }) => {


  const calculateAverage = (numbers: number[]): number => {
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    return sum / numbers.length;
  };

  const calculateAverages = (elem: any) => {
    const result: { [key: string]: number } = {};
    for (const key in elem) {
      if (Array.isArray(elem[key])) {
        result[key] = calculateAverage(elem[key]);
      }
    }
    return result;
  };
  

  const averages = useMemo(() => calculateAverages(elem), [elem]);

  return (
    <>
      <div className='item'>
        <Link to={`/metrics/${averages.id}`}>
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
            <div className="item__data__info__value">{elem.location?.country}</div>
          </div>


        </Link>
      </div>
    </>
  );
};

export default ItemCard;
import React from 'react';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { IMetrics } from '../../interfaces/interface';

interface IItemCard {
  elem: IMetrics
}

const ItemCard: FC<IItemCard> = ({ elem }) => {


  return (
    <>
      <div className='item'>

        <Link to={`/metrics/${elem.id}`}>


          <div className="item__name">
            <h2 className="item__name__header">{elem.server} Server</h2>
            <span className="item__name__server">server-{elem.id}</span>
          </div>
          <div className="item__data">
            <div className="all-cards--card--data--info">
              <span className="all-cards__info__name">Response Time</span>
              <span className="all-cards--card--data--info--value">{elem.responseTime}ms</span>
            </div>
            <div>
              <span className="all-cards__info__name">RPS</span>
              <span className="all-cards--card--data--info--value">{elem.rps}ms</span>
            </div>
            <div>
              <span className="all-cards__info__name">CPU</span>
              <span className="all-cards--card--data--info--value">{elem.cpu}136ms</span>
            </div>
            <div>
              <span className="all-cards__info__name">Memory</span>
              <span className="all-cards--card--data--info--value">{elem.memory}ms</span>
            </div>
          </div>
          <div className="all-cards--card--location">
            <div className="all-cards--card--data--info--label">Location</div>
            <div className="all-cards--card--data--info--value">{elem.location.country}</div>
          </div>


        </Link>
      </div>
    </>
  );
};

export default ItemCard;
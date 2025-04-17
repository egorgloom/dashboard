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
          <div className="all-cards--card--data">
            <div className="all-cards--card--data--info">
              <div className="all-cards__info__name">Response Time</div>
              <div className="all-cards--card--data--info--value">{elem.responseTime}ms</div>
            </div>
            <div>
              <div className="all-cards__info__name">RPS</div>
              <div className="all-cards--card--data--info--value">{elem.rps}ms</div>
            </div>
            <div>
              <div className="all-cards__info__name">CPU</div>
              <div className="all-cards--card--data--info--value">{elem.cpu}136ms</div>
            </div>
            <div>
              <div className="all-cards__info__name">Memory</div>
              <div className="all-cards--card--data--info--value">{elem.memory}ms</div>
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
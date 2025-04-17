import React, { useState } from 'react';
import { FC } from 'react';



const ItemCard: FC = () => {


  
  return (
    <>


        <div className='all-cards'>
          <div className='all-cards--card'>
            <div className="all-cards--card--server">
              <h2>WEB Server</h2>
              <span className="all-cards--card--data--info--label">server-1</span>
            </div>
            <div className="all-cards--card--data">
              <div className="all-cards--card--data--info">
                <div className="all-cards--card--data--info--label">Response Time</div>
                <div className="all-cards--card--data--info--value">136ms</div>
              </div>
              <div>
                <div className="all-cards--card--data--info--label">Response Time</div>
                <div className="all-cards--card--data--info--value">136ms</div>
              </div>
              <div>
                <div className="all-cards--card--data--info--label">Response Time</div>
                <div className="all-cards--card--data--info--value">136ms</div>
              </div>
              <div>
                <div className="all-cards--card--data--info--label">Response Time</div>
                <div className="all-cards--card--data--info--value">136ms</div>
              </div>
            </div>
            <div className="all-cards--card--location">
            <div className="all-cards--card--data--info--label">Location</div>
                <div className="all-cards--card--data--info--value">UK</div>
            </div>

          </div>
        </div>

    </>
  );
};

export default ItemCard;
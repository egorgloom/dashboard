import React from 'react';
import { FC } from 'react';
import { useGetMetricsQuery } from '../../API/metricsSlice';

import { IMetrics } from '../../interfaces/interface';
import ItemCard from '../ItemCard/ItemCard';



interface IOverviewPage { }

const OverviewPage: FC<IOverviewPage> = () => {

    const {data} = useGetMetricsQuery()

    return (
        <>
            <div className='wrapper'>
                <div className='wrapper__filters'>
                    <div className='wrapper__filter-select'>
                        <select name="" id="">
                            <option value="1">Last Hour</option>
                            <option value="3">2</option>
                            <option value="6">3</option>
                        </select>
                        <select name="" id="">
                            <option value="1">All Servers</option>
                            <option value="2">web</option>
                            <option value="3">db</option>
                            <option value="4">cache</option>

                        </select>
                    </div>
                    <div>
                        <button className='btn'>Pause</button>
                    </div>
                </div>
                <div className='all-cards'>
                {data?.map((elem: IMetrics) => <ItemCard elem={elem} key={elem.id}/>)}
                </div>
            </div>
        </>
    );
};

export default OverviewPage;
import React from 'react';
import { FC } from 'react';
import { useGetMetricsQuery } from '../../API/metricsSlice';
import { IMetrics } from '../../interfaces/interface';
import Header from '../Header/Header';
import ItemCard from '../ItemCard/ItemCard';

interface IOverviewPage { }

const OverviewPage: FC<IOverviewPage> = () => {

    const {data} = useGetMetricsQuery('')
    console.log(data)
    return (
        <>

            <Header />

            <div className='wrapper'>
                <div className='wrapper--filters'>
                    <div className='wrapper--filter-select'>
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
                {data?.map((elem: any) => <ItemCard elem={elem} key={elem.id}/>)}
                </div>
            </div>
        </>
    );
};

export default OverviewPage;
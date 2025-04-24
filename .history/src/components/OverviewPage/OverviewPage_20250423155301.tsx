import React, { useMemo, useState } from 'react';
import { FC } from 'react';

import { useGetMetricsQuery } from '../../API/metricsSlice';

import { IMetrics } from '../../interfaces/interface';
import ItemCard from '../ItemCard/ItemCard';

import { useAppSelector } from '../../hooks/useTypedSelector';
import SelectFilter from '../SelectFilter/SelectFilter';

interface IOverviewPage { }

const OverviewPage: FC<IOverviewPage> = () => {

    const {data, error, isLoading} = useGetMetricsQuery();

    const selectedPeriod  = useAppSelector((state) => state.filter.period);

    const [servers, setServers] = useState([])


    return (
        <>
            <div className='wrapper'>
                <div className='wrapper__filters'>
                    <div className='wrapper__filter-select'>
                        <select name="" id=""
                        >
                            <option value="1">Last Hour</option>
                            <option value="6">6</option>
                            <option value="12">12</option>
                        </select>
                        {/* <select 
                        defaultValue='All Servers'
                        >
                            <option value="1">{defaultValue}</option>
                            <option value="2">web</option>
                            <option value="3">db</option>
                            <option value="4">cache</option>

                        </select> */}
                        <SelectFilter 
                        defaultValue='All Servers'
                        value={servers}
                        onChange={(e:any) => setServers(e.target.value)}
                        />
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
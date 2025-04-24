import React, { useMemo, useState } from 'react';
import { FC } from 'react';

import { useGetMetricsQuery } from '../../API/metricsSlice';

import { IMetrics } from '../../interfaces/interface';
import ItemCard from '../ItemCard/ItemCard';

import { useAppSelector } from '../../hooks/useTypedSelector';
import SelectFilter from '../SelectFilter/SelectFilter';
import { useDispatch } from 'react-redux';
import { changePeriod } from '../../slice/filterSlice';

interface IOverviewPage { }

const OverviewPage: FC<IOverviewPage> = () => {

    const {data, error, isLoading} = useGetMetricsQuery();

    const selectedPeriod  = useAppSelector((state) => state.period.selectedPeriod);

    const dispatch = useDispatch();

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(changePeriod(event.target.value as 'h1' | 'h6' | 'h12'));
      };

      const historicalData =data?.location?.historicalData?.[selectedPeriod];

      console.log(historicalData)
    return (
        <>
            <div className='wrapper'>
                <div className='wrapper__filters'>
                    <div className='wrapper__filter-select'>
                    <select value={selectedPeriod} onChange={handleChange}>
                            <option value="h1">Last Hour</option>
                            <option value="h6">6</option>
                            <option value="h12">12</option>
                        </select>
                        {/* <select value={selectedPeriod} onChange={handleChange}>
                            <option value="1">{defaultValue}</option>
                            <option value="2">web</option>
                            <option value="3">db</option>
                            <option value="4">cache</option>

                        </select> */}
                        {/* <SelectFilter 
                        defaultValue='All Servers'
                        value={servers}
                        onChange={changeFilter}
                        options={[
                            { value: 'WEB', name: 'WEB' },
                            { value: 'DB', name: 'DB' }
                        ]}
                        /> */}
                    </div>
                    <div>
                        <button className='btn'>Pause</button>
                    </div>
                </div>
                <div className='all-cards'>
                {/* {historicalData?.map((elem: IMetrics) => <ItemCard elem={elem} key={elem.id}/>)} */}


                </div>
            </div> 
        </>
    );
};

export default OverviewPage;
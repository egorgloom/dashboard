import React, { useCallback, FC, useEffect } from 'react';


import { useGetMetricsQuery } from '../../API/metricsSlice';

import { IMetrics } from '../../interfaces/interface';
import ItemCard from '../ItemCard/ItemCard';

import { useAppSelector } from '../../hooks/useTypedSelector';

import { useDispatch } from 'react-redux';
import { processData, setRawData, setSelectedPeriod, setServerFilter } from '../../slice/filterSlice';


interface IOverviewPage { }

const OverviewPage: FC<IOverviewPage> = () => {

    const { data, error, isLoading } = useGetMetricsQuery();
    const dispatch = useDispatch();


    const selectedPeriod = useAppSelector((state) => state.metrics.selectedPeriod);
    const serverFilter = useAppSelector((state) => state.metrics.server);
    const filteredData = useAppSelector((state) => state.metrics.filteredData);

    useEffect(() => {
        if (data) {
          dispatch(setRawData(data));
          dispatch(processData())
        }
      }, [data, dispatch]);

      useEffect(() => {
        dispatch(setSelectedPeriod(selectedPeriod));
        dispatch(setServerFilter(serverFilter));// work
        dispatch(processData());
      }, [selectedPeriod, serverFilter, dispatch]);

      const handleServerFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setServerFilter(event.target.value as 'ALL' | 'WEB' | 'DB' | 'CACHE'));//work
      };
    
      const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setSelectedPeriod(event.target.value as 'h1' | 'h6' | 'h12'));
      };


    if (isLoading) {
        return <div>Загрузка...</div>;
    }

    if (error) {
        return <div>Ошибка при загрузке данных</div>;
    }
    return (
        <>
            <div className='wrapper'>
                <div className='wrapper__filters'>
                    <div className='wrapper__filter-select'>
                        <select value={selectedPeriod} onChange={handleChange}>
                            <option value="h1">Last Hour</option>
                            <option value="h6">h6</option>
                            <option value="h12">h12</option>
                        </select>
                        <select value={serverFilter} onChange={handleServerFilterChange}>
                            <option value="ALL">All</option>
                            <option value="WEB">web</option>
                            <option value="DB">db</option>
                            <option value="CACHE">cache</option>
                        </select>
                    </div>
                    <div>
                        <button className='btn'>Pause</button>
                    </div>
                </div>
                <div className='all-cards'>
                    {filteredData?.map((elem: IMetrics) => <ItemCard elem={elem} key={elem.id} />)}
                </div>
            </div>
        </>
    );
};

export default OverviewPage;
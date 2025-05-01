import React, { FC, useEffect} from 'react';


import { useGetMetricsQuery } from '../../API/metricsSlice';

import { IMetrics } from '../../interfaces/interface';
import StatWidget from '../StatWidget/StatWidget';

import { useAppSelector } from '../../hooks/useTypedSelector';

import { useDispatch } from 'react-redux';
import { processData, setRawData, setSelectedPeriod, setServerFilter } from '../../slice/filterSlice';
import AutorefreshToggle from '../AutorefreshToggle/AutorefreshToggle';
import SelectFilter from '../SelectFilter/SelectFilter';




const OverviewPage: FC = () => {


    const dispatch = useDispatch();


    const selectedPeriod = useAppSelector((state) => state.metrics.selectedPeriod);
    const serverFilter = useAppSelector((state) => state.metrics.server);
    const filteredData = useAppSelector((state) => state.metrics.filteredData);

    const { data, error, isLoading, refetch, isUninitialized } = useGetMetricsQuery();




    useEffect(() => {
        if (data) {
            dispatch(setRawData(data));
            dispatch(processData())
        }
    }, [data, dispatch]);

    useEffect(() => {
        dispatch(setSelectedPeriod(selectedPeriod));
        dispatch(setServerFilter(serverFilter));
        dispatch(processData());
    }, [selectedPeriod, serverFilter, dispatch]);

    const handleServerFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setServerFilter(event.target.value as 'ALL' | 'WEB' | 'DB' | 'CACHE'));
    };

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setSelectedPeriod(event.target.value as 'h1' | 'h6' | 'h12'));
    };

    console.log('data', data)
    if (isLoading) {
        return <div>Загрузка...</div>;
    }

    if (error) {
        return (
            <div >
              <p>Произошла ошибка при загрузке данных.</p>
              <button onClick={() => refetch()}>Повторить запрос</button>
            </div>
          );
    }
    return (
        <>
            <div className='wrapper'>
                <div className='wrapper__filters'>
                    <div className='wrapper__filter-select'>
                        <SelectFilter 
                            value={selectedPeriod}
                            onChange={handleChange}
                            option={['h1', 'h6', 'h12']} />
                        <SelectFilter 
                            value={serverFilter}
                            onChange={handleServerFilterChange}
                            option={['ALL', 'WEB', 'DB', 'CACHE']} 
                            />
                    </div>
                    <div>
                        <AutorefreshToggle refetch={refetch} interval={3000} isUninitialized={isUninitialized}/>
                    </div>
                </div>
                <div className='all-cards'>
                    {filteredData?.map((elem: IMetrics) => 
                    <StatWidget 
                    elem={elem} 
                    key={elem.id} 
                    isLoading={isLoading} 
                    error={error}/>)}
                </div>
            </div>
        </>
    );
};

export default OverviewPage;

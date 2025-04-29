import React, { FC, useEffect} from 'react';


import { useGetMetricsQuery } from '../../API/metricsSlice';

import { IMetrics } from '../../interfaces/interface';
import ItemCard from '../ItemCard/ItemCard';

import { useAppSelector } from '../../hooks/useTypedSelector';

import { useDispatch } from 'react-redux';
import { processData, setRawData, setSelectedPeriod, setServerFilter } from '../../slice/filterSlice';
import AutoRefresher from '../Button/AutoRefresher';
import SelectFilter from '../SelectFilter/SelectFilter';




const OverviewPage: FC = () => {


    const dispatch = useDispatch();


    const selectedPeriod = useAppSelector((state) => state.metrics.selectedPeriod);
    const serverFilter = useAppSelector((state) => state.metrics.server);
    const filteredData = useAppSelector((state) => state.metrics.filteredData);

    const { data, error, isLoading, refetch } = useGetMetricsQuery();




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
        return <div>Ошибка при загрузке данных</div>;
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
                        <AutoRefresher refetch={refetch} interval={3000} />
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

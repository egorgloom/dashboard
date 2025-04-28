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
    // const selectedPeriod = useAppSelector((state) => state.period.selectedPeriod);

    // const serverFilter = useAppSelector((state) => state.period.server)

    const selectedPeriod = useAppSelector((state) => state.metrics.selectedPeriod);
    const serverFilter = useAppSelector((state) => state.metrics.server);
    const filteredData = useAppSelector((state) => state.metrics.filteredData);

    useEffect(() => {
        if (data) {
          dispatch(setRawData(data));
        }
      }, [data, dispatch]);

      useEffect(() => {
        dispatch(setSelectedPeriod(selectedPeriod));
        dispatch(setServerFilter(serverFilter));
        dispatch(processData());
      }, [selectedPeriod, serverFilter, dispatch]);

      const handleServerFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setServerFilter(event.target.value as 'ALL' | 'web' | 'db' | 'cache'));
      };
    
      const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setSelectedPeriod(event.target.value as 'h1' | 'h6' | 'h12'));
      };

    // const handleServerFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    //     dispatch(changeServer(event.target.value as 'ALL' | 'web' | 'db' | 'cache'))
    // }

    // const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    //     dispatch(changePeriod(event.target.value as 'h1' | 'h6' | 'h12'));
    // };

    // const processData = useCallback(
    //     (item: IMetrics): IMetrics | null => {
    //         const periodData = item.historicalData?.[selectedPeriod];
    //         if (periodData) {
    //             return {
    //                 ...item,
    //                 historicalData: {
    //                     [selectedPeriod]: {
    //                         timestamp: periodData.timestamp,
    //                         responseTime: periodData.responseTime,
    //                         rps: periodData.rps,
    //                         cpu: periodData.cpu,
    //                         memory: periodData.memory,
    //                     }
    //                 }
    //             };
    //         }
    //         return null;

    //     }, [selectedPeriod]);

    // const filteredData: IMetrics[] | undefined = React.useMemo(() => {
    //     if (!data) return undefined;
    //     return data
    //         .map((item) => processData(item))
    //         .filter((item): item is IMetrics => item !== null);
    // }, [data, processData]);

    console.log('filteredData', filteredData)

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
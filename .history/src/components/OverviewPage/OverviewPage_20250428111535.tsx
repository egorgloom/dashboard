import React, { useCallback, FC, useEffect, useRef, useState } from 'react';


import { useGetMetricsQuery } from '../../API/metricsSlice';

import { IMetrics } from '../../interfaces/interface';
import ItemCard from '../ItemCard/ItemCard';

import { useAppSelector } from '../../hooks/useTypedSelector';

import { useDispatch } from 'react-redux';
import { processData, setRawData, setSelectedPeriod, setServerFilter } from '../../slice/filterSlice';


interface IOverviewPage { }

const OverviewPage: FC<IOverviewPage> = () => {


    const dispatch = useDispatch();


    const selectedPeriod = useAppSelector((state) => state.metrics.selectedPeriod);
    const serverFilter = useAppSelector((state) => state.metrics.server);
    const filteredData = useAppSelector((state) => state.metrics.filteredData);
    // const isFetching = useAppSelector((state) => state.metrics.isFetching)

    const { data, error, isLoading, refetch } = useGetMetricsQuery(undefined, 
        { pollingInterval: 30000, refetchOnReconnect: true });

    // const { data, refetch } = useGetMetricsQuery(undefined, { pollingInterval: 30000, refetchOnReconnect: true });

    // useEffect(() => {
    //     let intervalId: NodeJS.Timeout | undefined;
    //     if (isFetching) {
    //       intervalId = setInterval(() => {
    //         refetch();
    //       }, 30000);
    //     }
    //     return () => {
    //       if (intervalId) clearInterval(intervalId);
    //     };
    //   }, [isFetching, refetch]);
      

    // const handleToggleFetching = () => {
    //     dispatch(toggleRefetchMetrics());
    // };

    const [autoRefresh, setAutoRefresh] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
    // Обработчик для кнопки
    const toggleAutoRefresh = () => {
      setAutoRefresh(prev => !prev);
    };
  
    // Используем useEffect для запуска/остановки интервала
    useEffect(() => {
      if (autoRefresh) {
        // Запускаем интервал
        intervalRef.current = setInterval(() => {
          refetch(); // вручную вызываем повторный запрос
        }, 30000);
      } else {
        // Останавливаем интервал
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
      }
      // Очистка интервала при размонтировании или смене режима
      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    }, [autoRefresh, refetch]);

    
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
                    <button onClick={toggleAutoRefresh}>
        {autoRefresh ? 'Остановить автообновление' : 'Запустить автообновление'}
      </button>
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

function toggleRefetchMetrics(): any {
    throw new Error('Function not implemented.');
}

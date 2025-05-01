import React, { FC, useCallback, useEffect} from 'react';


import { useGetMetricsQuery } from '../../API/metricsSlice';

import { IMetrics } from '../../interfaces/interface';
import StatWidget from '../StatWidget/StatWidget';

import { useAppSelector } from '../../hooks/useTypedSelector';


// import { processData, setRawData, setTimeRange, setServerTypeFilter } from '../../slice/filterSlice';
import AutorefreshToggle from '../AutorefreshToggle/AutorefreshToggle';
import SelectFilter from '../SelectFilter/SelectFilter';
import { useActions } from './../../hooks/useActions';




const OverviewPage: FC = () => {

    const {processData, setRawData, setTimeRange, setServerTypeFilter} = useActions();


    const selectedPeriod = useAppSelector((state) => state.metrics.selectedPeriod);
    const serverFilter = useAppSelector((state) => state.metrics.server);
    const filteredData = useAppSelector((state) => state.metrics.filteredData);

    const { data, error, isLoading, refetch, isUninitialized } = useGetMetricsQuery();




    useEffect(() => {
        if (data) {
            setRawData(data);
            processData()
        }
    }, [data, setRawData, processData ]);

    useEffect(() => {
        setTimeRange(selectedPeriod);
        setServerTypeFilter(serverFilter);
        processData();
    }, [selectedPeriod, serverFilter, setTimeRange, setServerTypeFilter, processData]);

    const handleServerFilterChange = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
        setServerTypeFilter(event.target.value as 'ALL' | 'WEB' | 'DB' | 'CACHE');
      }, [setServerTypeFilter]);
    
      const handleChange = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
        setTimeRange(event.target.value as 'h1' | 'h6' | 'h12');
      }, [setTimeRange]);

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

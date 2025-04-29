import React, { useRef, useState } from 'react';
import { FC, useEffect } from 'react';

interface IAutoRefresher {
    refetch: ()=> void;
    interval? : number
}

const AutoRefresher: FC<IAutoRefresher> = ({refetch, interval = 3000}) => {

    const [autoRefresh, setAutoRefresh] = useState(true);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const toggleAutoRefresh = () => {
        setAutoRefresh(prev => !prev);
    };

    useEffect(() => {
        if (autoRefresh) {
            // Создаем интервал
            intervalRef.current = setInterval(() => {
                refetch();
            }, interval);
        } else {
            // Очищаем интервал
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        }
        console.log('autoRefresh changed:', autoRefresh);
        // Очистка при размонтировании или смене режима
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        };
    }, [autoRefresh, refetch, interval]);
  return (
    <>
    <button onClick={toggleAutoRefresh}>{autoRefresh ? 'Active' : 'Pause'}</button>
    </>
  );
};

export default AutoRefresher;
import React, { FC, useEffect, useRef, useState } from 'react';

interface IAutoRefresher {
    refetch: () => void;
    interval?: number;
}

const AutoRefresher: FC<IAutoRefresher> = ({ refetch, interval = 3000 }) => {
    const [autoRefresh, setAutoRefresh] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const toggleAutoRefresh = () => {
        setAutoRefresh(prev => !prev);
    };

    useEffect(() => {
        if (autoRefresh) {
            // Включение автоперезагрузки: вызываем сразу, чтобы не ждать интервала
            refetch();

            // Создаем интервал
            intervalRef.current = setInterval(() => {
                refetch();
            }, interval);
        } else {
            // Отключение автоперезагрузки: очищаем интервал
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        }

        // Очистка при размонтировании или смене режима
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        };
    }, [autoRefresh, refetch, interval]);

    return (
        <button onClick={toggleAutoRefresh}>
            {autoRefresh ? 'Pause' : 'Auto-Refresh'}
        </button>
    );
};

export default AutoRefresher;

import React, { FC, useEffect, useRef, useState } from 'react';

interface IAutoRefresher {
    refetch: () => void;
    interval?: number;
    isUninitialized?: boolean;
}

const AutoRefresher: FC<IAutoRefresher> = ({ refetch, interval = 3000, isUninitialized }) => {
    const [autoRefresh, setAutoRefresh] = useState(true);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const toggleAutoRefresh = () => {
        setAutoRefresh(prev => !prev);
    };

    useEffect(() => {
        // Не вызываем refetch, если запрос ещё не инициализирован
        if (!isUninitialized) {
            refetch();
        }

        if (autoRefresh) {
            // Перед запуском интервала убедитесь, что запрос инициализирован
            if (!isUninitialized) {
                refetch();
                intervalRef.current = setInterval(() => {
                    if (!isUninitialized) {
                        refetch();
                    }
                }, interval);
            }
        } else {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        }

        // Очистка интервала при размонтировании или отключении автопросмотра
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        };
    }, [autoRefresh, refetch, interval, isUninitialized]);

    return (
        <button onClick={toggleAutoRefresh}>
            {autoRefresh ? 'Pause' : 'Auto-Refresh'}
        </button>
    );
};

export default AutoRefresher;

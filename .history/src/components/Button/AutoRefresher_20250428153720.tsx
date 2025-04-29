import React, { FC, useEffect, useRef, useState } from 'react';

interface IAutoRefresher {
    refetch: () => void;
    interval?: number;
    isUninitialized: Boolean,
}

const AutoRefresher: FC<IAutoRefresher> = ({ refetch, interval = 3000, isUninitialized }) => {
    const [autoRefresh, setAutoRefresh] = useState(true);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const toggleAutoRefresh = () => {
        setAutoRefresh(prev => !prev);
    };

    useEffect(() => {
        if(!isUninitialized) {
            refetch()
        }
        if (autoRefresh) {
            refetch();
            intervalRef.current = setInterval(() => {
                refetch();
            }, interval);
        } else {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        }

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

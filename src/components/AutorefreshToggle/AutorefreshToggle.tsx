import React, { FC, useEffect, useRef, useState } from 'react';

interface IAutorefreshToggle {
    refetch: () => void;
    interval?: number;
    isUninitialized?: boolean;
    isLoading?: boolean;
}

const AutorefreshToggle: FC<IAutorefreshToggle> = ({ refetch, isUninitialized, isLoading, interval = 3000 }) => {
    const [autoRefresh, setAutoRefresh] = useState(true);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const toggleAutoRefresh = () => {
        setAutoRefresh(prev => !prev);
    };

    useEffect(() => {
        if (!isUninitialized && !isLoading) {
            refetch();
        }

        if (autoRefresh) {
            if (!isUninitialized && !isLoading) {
                refetch();
                intervalRef.current = setInterval(() => {
                    if (!isUninitialized && !isLoading) {
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

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        };
    }, [autoRefresh, refetch, interval, isUninitialized, isLoading]);

    return (
        <button onClick={toggleAutoRefresh}>
            {autoRefresh ? 'Pause' : 'Active'}
        </button>
    );
};

export default AutorefreshToggle;

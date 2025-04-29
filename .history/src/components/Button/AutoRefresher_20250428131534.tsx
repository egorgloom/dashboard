import React, { useRef, useState } from 'react';
import { FC, useEffect } from 'react';

interface IAutoRefresher {
    refetch: ()=> void;
    interval? : number
}

const AutoRefresher: FC<IAutoRefresher> = ({refetch, interval}) => {

    const [autoRefresh, setAutoRefresh] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const toggleAutoRefresh = () => {
        setAutoRefresh(prev => !prev);
      };

      useEffect(()=> {
        if(autoRefresh) {
            intervalRef.current = setInterval(()=>{
                refetch()
            }, interval)
        }
        else {
            if(intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null
            }
        }

        return ()=> {
            if(intervalRef.current) {
                clearInterval(intervalRef.current)
            }
        }
      }, [autoRefresh, refetch, interval])
  return (
    <>
    <button onClick={toggleAutoRefresh}>{autoRefresh ? 'Active' : 'Pause'}</button>
    </>
  );
};

export default AutoRefresher;
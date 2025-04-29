import React from 'react';
import { FC } from 'react';
import { IMetrics } from '../../interfaces/interface';

interface ISelectFilter {
    defaultValue: string,
    value: string,
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void,
    data?: IMetrics[],
    option: string[]
}

const SelectFilter: FC<ISelectFilter> = ({defaultValue, value, onChange, data, option}) => {

  // function extractValues(data: IMetrics[] | undefined, keyName: string) {
  //   // keyName — строка, например 'server' или 'historicalData'
  //   const values = new Set<string>();
  
  //   data?.forEach((item: IMetrics) => {
  //     if (keyName === 'server' && item.server) {
  //       values.add(item.server);
  //     } else if (keyName === 'keys' && item.historicalData) {
  //       Object.keys(item.historicalData).forEach(k => values.add(k));
  //     }
  //   });
  
  //   return Array.from(values);
  // }


  return (
    <>
    <select 
    value={value}
    onChange={(event: any)=> onChange(event)}
    >
        <option disabled value={defaultValue}>{defaultValue}</option>
        {option?.map((option: any) => 
            <option key={option} value={option}>{option}</option>)}
    </select>
    </>
  );
};

export default SelectFilter;
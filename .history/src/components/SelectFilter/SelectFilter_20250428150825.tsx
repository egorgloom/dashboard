import React from 'react';
import { FC } from 'react';
import { IMetrics } from '../../interfaces/interface';

interface ISelectFilter {
    value: string,
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void,
    option: string[]
}

const SelectFilter: FC<ISelectFilter> = ({ value, onChange, option}) => {

  return (
    <>
    <select 
    value={value}
    onChange={(event: any)=> onChange(event)}
    >
        {option?.map((option: any) => 
            <option key={option} value={option}>{option}</option>)}
    </select>
    </>
  );
};

export default SelectFilter;
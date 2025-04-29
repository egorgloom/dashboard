import React from 'react';
import { FC } from 'react';

interface ISelectFilter {
    defaultValue: string,
    value: string,
    onChange: (value: string) => void;
    options: string[]
}

const SelectFilter: FC<ISelectFilter> = ({defaultValue, value, onChange, options}) => {
  return (
    <>
    <select 
    value={value}
    onChange={(e)=> onChange(e.target.value)}
    >
        <option disabled value="">{defaultValue}</option>
        {options.map((option: any) => 
            <option key={option.value} value={option.value}>{option.name}</option>)}
    </select>
    </>
  );
};

export default SelectFilter;
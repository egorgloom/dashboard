import React from 'react';
import { FC } from 'react';

interface ISelectFilter {
    defaultValue: string,
    value: string,
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void,
    options?: any
}

const SelectFilter: FC<ISelectFilter> = ({defaultValue, value, onChange, options}) => {
  return (
    <>
    <select 
    value={value}
    onChange={(event: any)=> onChange(event.target.value)}
    >
        <option disabled value="">{defaultValue}</option>
        {options.map((option: any) => 
            <option key={option.value} value={option.value}>{option.name}</option>)}
    </select>
    </>
  );
};

export default SelectFilter;
import React from 'react';
import { FC } from 'react';

interface ISelectFilter {
    defaultValue: string,
    value: any,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SelectFilter: FC<ISelectFilter> = ({defaultValue, value, onChange}) => {
  return (
    <>
    <select 
    // className={classes.mySelect}
    value={value}
    onChange={(e: any)=> onChange(e.target.value)}
    >
        <option disabled value="">{defaultValue}</option>
        {/* {options.map(option => 
            <option key={option.value} value={option.value}>{option.name}</option>)} */}
    </select>
    </>
  );
};

export default SelectFilter;
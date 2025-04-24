import React from 'react';
import { FC } from 'react';

interface ISelectFilter {}

const SelectFilter: FC<ISelectFilter> = () => {
  return (
    <>
    <select 
    // className={classes.mySelect}
    // value={value}
    // onChange={e=> onChange(e.target.value)}
    >
        <option disabled value="">defaultValue</option>
        {/* {options.map(option => 
            <option key={option.value} value={option.value}>{option.name}</option>)} */}
    </select>
    </>
  );
};

export default SelectFilter;
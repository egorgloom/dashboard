import React from 'react';
import { FC } from 'react';

interface ILoading {}

const Loading: FC<ILoading> = () => {
  return (
    <div className='center'>
    <p>
        Loading....
    </p>
    <div className='myLoader'>
    </div>
</div>
  );
};

export default Loading;
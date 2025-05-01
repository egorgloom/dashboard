import React from 'react';
import { FC } from 'react';

interface ILoading {}

const Loading: FC<ILoading> = () => {
  return (
    <div className='loading'>
    <p>
        Loading....
    </p>
    <div>
    </div>
</div>
  );
};

export default Loading;
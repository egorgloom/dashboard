import React from 'react';
import { FC } from 'react';

interface IHeader {}

const Header: FC<IHeader> = () => {
  return (
    <>
          <header className='header'>
        <a href="/" aria-label="Dashboard" className='header--logo'>
          Dashboard Monitor
        </a>
      </header>
    </>
  );
};

export default Header;
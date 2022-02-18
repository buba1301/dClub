import * as React from 'react';

import s from './Header.module.scss';

import Logo from './Logo';
import GeoSearch from './GeoSearch';
import Serach from './Search';
import Login from './Login';
import Basket from './Basket';

const Header = () => (
  <div className={s.headerWrapper}>
    <div className={s.header}>
      <div className={s.headerContainer}>
        <Logo />

        <div className={s.searchsConteiner}>
          <GeoSearch />
          <Serach />
        </div>
        <Login />
        <Basket />
      </div>
    </div>
  </div>
);

export default Header;

import * as React from 'react';

import s from './Header.module.scss';

import Logo from './Logo';
import GeoSearch from './GeoSearch';
import Serach from './Search';

const Header = () => (
  <div className={s.headerWrapper}>
    <div className={s.header}>
      <div className={s.headerContainer}>
        <div className={s.logoWrap}>
          <Logo />
        </div>
        <GeoSearch />
        <Serach />
        <div className={s.buttonContainer}>4</div>
        <div className={s.buscketContainer}>5</div>
      </div>
    </div>
  </div>
);

export default Header;

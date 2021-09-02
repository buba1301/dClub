import * as React from 'react';

import s from './Header.module.scss';

const Header = () => (
  <div className={s.headerWrapper}>
    <div className={s.header}>
      <div className={s.headerContainer}>
        <div className={s.logoWrap}>1</div>
        <div className={s.filtersContainer}>2</div>
        <div className={s.seachContainer}>3</div>
        <div className={s.buttonContainer}>4</div>
        <div className={s.buscketContainer}>5</div>
      </div>
    </div>
  </div>
);

export default Header;

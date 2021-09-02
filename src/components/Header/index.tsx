import * as React from 'react';

import s from './Header.module.scss';

const Header = () => (
  <div className={s.headerWrapper}>
    <div className={s.header}>
      <div className={s.headerContainer} />
    </div>
  </div>
);

export default Header;

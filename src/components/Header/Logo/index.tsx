import * as React from 'react';
import { GiBison } from 'react-icons/gi';

import s from './Logo.module.scss';

const Logo = () => (
  <>
    <div className={s.iconWrap}>
      <GiBison size={40} />
    </div>
    <div className={s.textWrap}>Perivery Blub</div>
  </>
);

export default Logo;

// TODO: add i18next react for text
// TODO: add link to '/'

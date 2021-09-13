import * as React from 'react';
import Slider from '../../components/Slider';

import s from './Vendor.module.scss';

const Vendor = () => (
  <main className={s.container}>
    <div className={s.wrap}>
      <Slider />
    </div>
  </main>
);

export default Vendor;

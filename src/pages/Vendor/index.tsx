import * as React from 'react';

import s from './Vendor.module.scss';
import Tabs from '../../components/Tabs';

const Vendor = () => (
  <main className={s.container}>
    <Tabs />
    <div className={s.filtersContainer}>2</div>
    <div className={s.vendorListContainer}>3</div>
    <div className={s.moreButtonContainer}>4</div>
  </main>
);

export default Vendor;

import * as React from 'react';

import s from './Filters.module.scss';

const filters: string[] = ['||', 'любимые', 'навынос', 'акции', 'кухни', 'бронирование'];

const Filters = () => (
  <div className={s.filtersContainer}>
    {filters.map((filter) => (
      <div className={s.itemContainer}>{filter}</div>
    ))}
  </div>
);

export default Filters;

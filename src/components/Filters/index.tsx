import * as React from 'react';
import { RestorantFilters, ShopsFilters } from '../../utils/filters';

import s from './Filters.module.scss';

// const filters: string[] = ['||', 'Любимые', 'Навынос', 'Акции', 'Кухни', 'Бронирование'];

type Props = {
  filters: ShopsFilters[] | RestorantFilters[];
};

const Filters = ({ filters }: Props) => (
  <div className={s.filtersContainer}>
    {filters.map((filter: RestorantFilters | ShopsFilters) => (
      <div key={filter.type} className={s.itemContainer}>
        {filter.name}
      </div>
    ))}
  </div>
);

export default Filters;

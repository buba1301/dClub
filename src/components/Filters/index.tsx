/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import * as React from 'react';
import { FiltersItems } from '../../utils/filters';
import DropMenuButton from './DropMenuButton';
import FilterButton from './FilterButton';

import s from './Filters.module.scss';

type Props = {
  filtersList: FiltersItems[];
};

const Filters = ({ filtersList }: Props) => (
  <div className={s.filtersContainer}>
    {filtersList.map((item) =>
      item.types ? (
        <DropMenuButton key={item.type} name={item.name} type={item.type} types={item.types} />
      ) : (
        <FilterButton key={item.type} name={item.name} type={item.type} />
      ),
    )}
  </div>
);

export default Filters;

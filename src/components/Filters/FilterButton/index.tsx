/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import * as React from 'react';
import cn from 'classnames';

import s from './FilterButton.module.scss';
import FiltersContext from '../../../Context';

// TODO: любимые если не авторизован то форма авторизации

type Props = {
  name: string;
  type: string;
  active: boolean | undefined;
  setActiveFilters: Function;
};

const FilterButton = ({ name, type, active, setActiveFilters }: Props) => {
  const dispatch = React.useContext(FiltersContext);

  const handleClick = (event: React.SyntheticEvent<HTMLButtonElement>) => {
    const { id } = event.currentTarget;

    // запрос на сервер

    setActiveFilters((prevState: any) =>
      prevState.map((item: any) =>
        item.type === id ? { ...item, active: !item.active } : item,
      ),
    );

    !active
      ? dispatch({ type: 'addFilter', payload: type })
      : dispatch({ type: 'removeFilter', payload: type });
  };

  const classNames = cn(s.filterButton, {
    [s.active]: active,
  });

  return (
    <div className={s.itemContainer} id={type}>
      <button
        id={type}
        className={classNames}
        type="button"
        onClick={handleClick}>
        {name}
      </button>
    </div>
  );
};

export default FilterButton;

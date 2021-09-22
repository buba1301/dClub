/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import * as React from 'react';
import cn from 'classnames';

import s from './FilterButton.module.scss';

// TODO: любимые если не авторизован то форма авторизации

type Props = {
  name: string;
  type: string;
  active: boolean | undefined;
  setActiveFilters: Function;
};

const FilterButton = ({ name, type, active, setActiveFilters }: Props) => {
  const handleClick = (event: React.SyntheticEvent<HTMLButtonElement>) => {
    const { id } = event.currentTarget;

    setActiveFilters((prevState: any) =>
      prevState.map((item: any) =>
        item.type === id ? { ...item, active: !item.active } : item,
      ),
    );
  };

  const classNames = cn(s.filterButton, {
    [s.active]: active,
  });

  return (
    <div className={s.itemContainer} id={type}>
      <button
        id={type}
        className={classNames}
        type="submit"
        onClick={handleClick}>
        {name}
      </button>
    </div>
  );
};

export default FilterButton;

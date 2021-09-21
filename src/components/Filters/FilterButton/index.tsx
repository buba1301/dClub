/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import * as React from 'react';
import cn from 'classnames';

import s from './FilterButton.module.scss';
import FiltersContext from '../../../Context';

type Props = {
  name: string;
  type: string;
};

const FilterButton = ({ name, type }: Props) => {
  const [active, setActive] = React.useState(false);

  const dispatch = React.useContext(FiltersContext);

  const handleClick = (event: React.SyntheticEvent<HTMLDivElement>) => {
    active
      ? dispatch({ type: 'removeFilter', payload: type })
      : dispatch({ type: 'addFilter', payload: type });

    setActive((prevState) => !prevState);
  };

  const classNames = cn(s.itemContainer, {
    [s.active]: active,
  });

  return (
    <div className={classNames} id={type} onClick={handleClick}>
      {name}
    </div>
  );
};

export default FilterButton;

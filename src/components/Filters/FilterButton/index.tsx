/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import * as React from 'react';
import cn from 'classnames';

import s from './FilterButton.module.scss';

type Props = {
  name: string;
  type: string;
  onClick: Function;
};

const FilterButton = ({ name, type, onClick }: Props) => {
  const [active, setActive] = React.useState(false);

  const handleClick = (event: React.SyntheticEvent<HTMLDivElement>) => {
    onClick && onClick(event);
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

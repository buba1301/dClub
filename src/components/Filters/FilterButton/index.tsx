/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import * as React from 'react';
import cn from 'classnames';

import s from './FilterButton.module.scss';

// TODO: любимые если не авторизован то форма авторизации

type Props = {
  name: string;
  type: string;
  showCloseButton: React.Dispatch<React.SetStateAction<boolean>>;
  activeClearFiltersButton: boolean;
};

const FilterButton = ({
  name,
  type,
  showCloseButton,
  activeClearFiltersButton,
}: Props) => {
  const [active, setActive] = React.useState(false);

  React.useEffect(() => {
    !activeClearFiltersButton && setActive(false);
  }, [activeClearFiltersButton]);

  const handleClick = (event: React.SyntheticEvent<HTMLButtonElement>) => {
    showCloseButton(true);
    setActive((prevState) => !prevState);
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

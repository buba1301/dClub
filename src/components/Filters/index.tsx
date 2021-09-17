/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import * as React from 'react';
import { FiltersItems } from '../../utils/filters';
import DropMenu from './DropMenu';

import s from './Filters.module.scss';

type Props = {
  filters: FiltersItems[];
};

const Filters = ({ filters }: Props) => {
  const [openDrop, setOpenDrop] = React.useState(false);
  const [dropMenu, setMenuDrop] = React.useState<FiltersItems>({ name: '', type: '' });

  const handleClick = (event: React.SyntheticEvent<HTMLDivElement>) => {
    const { id } = event.currentTarget;

    if (id === 'sort' || id === 'kitchen') {
      setOpenDrop(true);

      const menuTypesList = filters.find(({ type }) => type === id);

      menuTypesList && setMenuDrop(menuTypesList);
      // return;
    }
  };

  return (
    <div className={s.filtersContainer}>
      {filters.map((filter) => (
        <div key={filter.type} className={s.itemContainer} id={filter.type} onClick={handleClick}>
          {filter.name}
        </div>
      ))}
      {openDrop && <DropMenu setOpenDrop={setOpenDrop} dropMenu={dropMenu} />}
    </div>
  );
};

export default Filters;

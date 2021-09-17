/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import * as React from 'react';
import { FiltersItems, TypesList } from '../../utils/filters';
import DropMenu from './DropMenu';

import s from './Filters.module.scss';

type Props = {
  filters: FiltersItems[];
};

const Filters = ({ filters }: Props) => {
  const [openDrop, setOpenDrop] = React.useState(false);
  const [dropMenuTypesList, setMenuDropTypesList] = React.useState<TypesList[]>([]);

  const handleClick = (event: React.SyntheticEvent<HTMLDivElement>) => {
    const { id } = event.currentTarget;

    if (id === 'sort' || id === 'kitchen') {
      setOpenDrop(true);

      const menuTypesList = filters.find(({ type }) => type === id)?.types;

      menuTypesList && setMenuDropTypesList(menuTypesList);
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
      {openDrop && <DropMenu setOpenDrop={setOpenDrop} dropMenuTypesList={dropMenuTypesList} />}
    </div>
  );
};

export default Filters;

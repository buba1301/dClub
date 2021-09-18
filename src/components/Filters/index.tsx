/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import * as React from 'react';
import { FiltersItems } from '../../utils/filters';
import DropMenu from './DropMenu';
import FilterButton from './FilterButton';

import s from './Filters.module.scss';

type Props = {
  filtersList: FiltersItems[];
};

const Filters = ({ filtersList }: Props) => {
  const [openDrop, setOpenDrop] = React.useState(false);
  const [dropMenu, setMenuDrop] = React.useState<FiltersItems>({ name: '', type: '' });

  const handleClick = (event: React.SyntheticEvent<HTMLDivElement>) => {
    const { id } = event.currentTarget;

    if (id === 'sort' || id === 'kitchen') {
      setOpenDrop((prevState) => !prevState);

      const menuTypesList = filtersList.find(({ type }) => type === id);

      menuTypesList && setMenuDrop(menuTypesList);
      // return;
    }
  };

  return (
    <div className={s.filtersContainer}>
      {filtersList.map((item) => (
        <FilterButton key={item.type} name={item.name} type={item.type} onClick={handleClick} />
      ))}
      {openDrop && <DropMenu setOpenDrop={setOpenDrop} dropMenu={dropMenu} />}
    </div>
  );
};

export default Filters;

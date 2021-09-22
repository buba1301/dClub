/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import * as React from 'react';
import { GrClose } from 'react-icons/gr';
import FiltersContext from '../../Context';
import { FiltersItems } from '../../utils/filters';
import DropMenuButton from './DropMenuButton';
import FilterButton from './FilterButton';

import s from './Filters.module.scss';

type Props = {
  filtersList: FiltersItems[];
};

const Filters = ({ filtersList }: Props) => {
  const [
    activeClearFiltersButton,
    setActiveClearFiltersButton,
  ] = React.useState(false);

  const [activeFilters, setActiveFilters] = React.useState<FiltersItems[]>([]);

  const dispatch = React.useContext(FiltersContext);

  React.useEffect(() => {
    setActiveFilters(filtersList);
  }, [filtersList]);

  React.useEffect(() => {
    const hasActiveFilters = activeFilters.map((item) => item.active);

    setActiveClearFiltersButton(hasActiveFilters.includes(true));
  }, [activeFilters]);

  const handleClose = () => {
    setActiveFilters((prevState) =>
      prevState.map((item) => ({ ...item, active: false })),
    );
    setActiveClearFiltersButton(false);
    dispatch({ type: 'removeFilter', payload: '' });
  };

  return (
    <div className={s.filtersContainer}>
      {activeFilters.map((item) =>
        item.types ? (
          <DropMenuButton
            key={item.type}
            name={item.name}
            type={item.type}
            types={item.types}
            active={item.active}
            setActiveFilters={setActiveFilters}
          />
        ) : (
          <FilterButton
            key={item.type}
            name={item.name}
            type={item.type}
            active={item.active}
            setActiveFilters={setActiveFilters}
          />
        ),
      )}
      {activeClearFiltersButton && (
        <div className={s.buttonContainer}>
          <button type="button" onClick={handleClose}>
            <GrClose size={20} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Filters;

// setActiveClearFiltersButton,

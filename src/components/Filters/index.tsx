/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import * as React from 'react';
import { GrClose } from 'react-icons/gr';
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

  const handleClose = () => {
    setActiveClearFiltersButton(false);
  };

  return (
    <div className={s.filtersContainer}>
      {filtersList.map((item) =>
        item.types ? (
          <DropMenuButton
            key={item.type}
            name={item.name}
            type={item.type}
            types={item.types}
            activeClearFiltersButton={activeClearFiltersButton}
            showCloseButton={setActiveClearFiltersButton}
          />
        ) : (
          <FilterButton
            key={item.type}
            name={item.name}
            type={item.type}
            activeClearFiltersButton={activeClearFiltersButton}
            showCloseButton={setActiveClearFiltersButton}
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

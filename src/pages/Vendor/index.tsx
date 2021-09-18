import * as React from 'react';

import s from './Vendor.module.scss';
import Tabs from '../../components/Tabs';
import Filters from '../../components/Filters';
import { restorantFilters, FiltersItems, shopsFilters, ActiveFilters } from '../../utils/filters';
import FiltersContext from '../../Context';

type FiltersList = {
  [key: string]: FiltersItems[];
};

type Actions = {
  type: string;
  value: string;
};

const filtersListOnPage: FiltersList = {
  restorant: restorantFilters,
  shops: shopsFilters,
};

function reducerActiveFilters(state: ActiveFilters[], action: Actions): ActiveFilters[] {
  switch (action.type) {
    case 'addFilter':
      return [...state, { type: action.value }];
    case 'removeFilter':
      return state.filter(({ type }) => type !== action.value);
    default:
      throw new Error();
  }
}

const Vendor = () => {
  const [currentTab, setCurrentTab] = React.useState<string>('restorant');
  const [filtersList, setFiltersList] = React.useState<FiltersItems[]>([]);
  // const [vendorsData, setVendorsData] = React.useState([]);
  const [dispatch] = React.useReducer(reducerActiveFilters, []);

  React.useEffect(() => {
    setFiltersList(filtersListOnPage[currentTab]);
  }, [currentTab]);

  return (
    <main className={s.container}>
      <Tabs setCurrentTab={setCurrentTab} />
      <FiltersContext.Provider value={dispatch}>
        {filtersList && <Filters filtersList={filtersList} />}
      </FiltersContext.Provider>
      <div className={s.vendorListContainer}>3</div>
      <div className={s.moreButtonContainer}>4</div>
    </main>
  );
};

export default Vendor;

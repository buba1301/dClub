import * as React from 'react';

import s from './Vendor.module.scss';
import Tabs from '../../components/Tabs';
import Filters from '../../components/Filters';
import { restorantFilters, FiltersItems, shopsFilters } from '../../utils/filters';

type FiltersList = {
  [key: string]: FiltersItems[];
};

const filtersListOnPage: FiltersList = {
  restorant: restorantFilters,
  shops: shopsFilters,
};

const Vendor = () => {
  const [currentTab, setCurrentTab] = React.useState<string>('restorant');
  const [filtersList, setFiltersList] = React.useState<FiltersItems[]>([]);
  // const [vendorsData, setVendorsData] = React.useState([]);
  // const [activeFilters, setActiveFilters] = React.useState([]);

  React.useEffect(() => {
    setFiltersList(filtersListOnPage[currentTab]);
  }, [currentTab]);

  return (
    <main className={s.container}>
      <Tabs setCurrentTab={setCurrentTab} />
      {filtersList && <Filters filtersList={filtersList} />}
      <div className={s.vendorListContainer}>3</div>
      <div className={s.moreButtonContainer}>4</div>
    </main>
  );
};

export default Vendor;

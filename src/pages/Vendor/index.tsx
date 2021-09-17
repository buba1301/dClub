import * as React from 'react';

import s from './Vendor.module.scss';
import Tabs from '../../components/Tabs';
import Filters from '../../components/Filters';
import { restorantFilters, RestorantFilters, shopsFilters, ShopsFilters } from '../../utils/filters';

type FiltersList = {
  [key: string]: RestorantFilters[] | ShopsFilters[];
};

const filtersList: FiltersList = {
  restorant: restorantFilters,
  shops: shopsFilters,
};

const Vendor = () => {
  const [currentTab, setCurrentTab] = React.useState<string>('restorant');
  const [filters, setFilters] = React.useState<RestorantFilters[] | ShopsFilters[]>([]);

  React.useEffect(() => {
    setFilters(filtersList[currentTab]);
  }, [currentTab]);

  return (
    <main className={s.container}>
      <Tabs setCurrentTab={setCurrentTab} />
      {filters && <Filters filters={filters} />}
      <div className={s.vendorListContainer}>3</div>
      <div className={s.moreButtonContainer}>4</div>
    </main>
  );
};

export default Vendor;

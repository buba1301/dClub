import * as React from 'react';
import axios from 'axios';
import { orderBy } from 'lodash';

import s from './Vendor.module.scss';

import Tabs from '../../components/Tabs';
import Filters from '../../components/Filters';
import Card from '../../components/Card';

import {
  restorantFilters,
  FiltersItems,
  shopsFilters,
} from '../../utils/filters';
import normalizeFiltersList from '../../utils/normalize';
import routes from '../../routes';

type FiltersList = {
  [key: string]: FiltersItems[];
};

const filtersListOnPage: FiltersList = {
  restorant: restorantFilters,
  shops: shopsFilters,
};

const Vendor = () => {
  const vendorsCount = 12;
  const [currentTab, setCurrentTab] = React.useState<string>('restorant');
  const [filtersList, setFiltersList] = React.useState<FiltersItems[]>([]);
  const [vendorsList, setVendorList] = React.useState([]);
  const [vendorsOnPage, setVendorsOnPage] = React.useState(12);

  React.useEffect(() => {
    setFiltersList(normalizeFiltersList(filtersListOnPage[currentTab]));
  }, [currentTab]);

  React.useEffect(() => {
    const fetchVenorsList = async () => {
      try {
        const res = await axios.get(routes.vendors(vendorsOnPage));
        setVendorList(res.data);
      } catch (e) {
        throw new Error();
      }
    };

    fetchVenorsList();
  }, [vendorsOnPage]);

  console.log('Vendor', vendorsList);
  console.log(
    'Vendor sort',
    orderBy(vendorsList, 'rating', 'desc').map(({ rating }) => rating),
  );

  const handleClick = () => {
    setVendorsOnPage((prevState) => prevState + vendorsCount);
  };

  return (
    <main className={s.container}>
      <Tabs setCurrentTab={setCurrentTab} />

      {filtersList && <Filters filtersList={filtersList} />}

      <div className={s.vendorListContainer}>
        {vendorsList.map((vendor: any) => (
          <Card key={vendor.id} name={vendor.name} />
        ))}
      </div>

      <div className={s.moreButtonContainer}>
        <button type="button" onClick={handleClick}>
          Показать еще рестораны
        </button>
      </div>
    </main>
  );
};

export default Vendor;

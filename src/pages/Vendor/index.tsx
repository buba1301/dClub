import * as React from 'react';
import axios from 'axios';
import { orderBy } from 'lodash';

import s from './Vendor.module.scss';

import Tabs from '../../components/Tabs';
import Filters from '../../components/Filters';
import {
  restorantFilters,
  FiltersItems,
  shopsFilters,
} from '../../utils/filters';
// import FiltersContext from '../../Context';
import normalizeFiltersList from '../../utils/normalize';
import routes from '../../routes';

type FiltersList = {
  [key: string]: FiltersItems[];
};

export type Actions = {
  type: string;
  payload: string | string[];
};

const filtersListOnPage: FiltersList = {
  restorant: restorantFilters,
  shops: shopsFilters,
};

/* type State = {
  sort: string;
  filters: Array<string | string[]>;
};

function reducerActiveFilter(state: State, action: Actions): State {
  switch (action.type) {
    case 'addSort':
      return { ...state, sort: action.payload };
    case 'addFilter':
      return { ...state, filters: [...state.filters, action.payload] };
    case 'removeFilter':
      return {
        ...state,
        filters: state.filters.map((item) => item !== action.payload),
      };
    case 'removeAllFilters':
      return { ...state, sort: '', filters: [] };
    default:
      throw new Error();
  }
} */

const Vendor = () => {
  const [currentTab, setCurrentTab] = React.useState<string>('restorant');
  const [filtersList, setFiltersList] = React.useState<FiltersItems[]>([]);
  const [vendorsList, setVendorList] = React.useState([]);

  React.useEffect(() => {
    setFiltersList(normalizeFiltersList(filtersListOnPage[currentTab]));
  }, [currentTab]);

  React.useEffect(() => {
    const fetchVenorsList = async () => {
      try {
        const res = await axios.get(routes.vendors());
        setVendorList(res.data);
      } catch (e) {
        throw new Error();
      }
    };

    fetchVenorsList();
  }, []);

  console.log('Vendor', vendorsList);
  console.log(
    'Vendor sort',
    orderBy(vendorsList, 'rating', 'desc').map(({ rating }) => rating),
  );

  return (
    <main className={s.container}>
      <Tabs setCurrentTab={setCurrentTab} />

      {filtersList && <Filters filtersList={filtersList} />}

      <div className={s.vendorListContainer}>
        {vendorsList.map(({ id, name }: any) => (
          <div className={s.cards} key={id}>
            {name}
          </div>
        ))}
      </div>

      <div className={s.moreButtonContainer}>
        <button type="button">Показать еще рестораны</button>
      </div>
    </main>
  );
};

export default Vendor;

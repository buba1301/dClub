import { FiltersItems } from './filters';

const normalizeFiltersList = (filtersList: FiltersItems[]) => {
  const newFiltersList = filtersList.map((filter) => ({
    ...filter,
    active: false,
  }));

  return newFiltersList;
};

export default normalizeFiltersList;

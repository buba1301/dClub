import * as React from 'react';
import { Actions } from '../pages/Vendor';

// import { ActiveFilters } from '../utils/filters';

const FiltersContext = React.createContext<React.Dispatch<Actions>>(() => null);

export default FiltersContext;

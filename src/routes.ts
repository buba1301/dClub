const host = 'http://localhost:3004';

type Routes = {
  [key: string]: (value?: string | number) => string;
};

const routes: Routes = {
  vendors: (vendorsOnPage) =>
    [host, 'restorants', `?_start=0&_end=${vendorsOnPage}`].join('/'),
};

export default routes;

const host = 'http://localhost:3004';

type Routes = {
  [key: string]: (value?: string) => string;
};

const routes: Routes = {
  vendors: () => [host, 'restorants', '?_start=0&_end=12'].join('/'),
};

export default routes;

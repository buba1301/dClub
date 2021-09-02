import * as React from 'react';

import s from './App.module.scss';

import Header from './components/Header';

const App = () => (
  <div className={s.wrap}>
    <Header />
  </div>
);

export default App;

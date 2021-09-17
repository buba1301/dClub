import * as React from 'react';

import s from './App.module.scss';

import Header from './components/Header';
import Slider from './components/Slider';
import Vendor from './pages/Vendor';

const App = () => (
  <>
    <div className={s.wrap}>
      <Header />
    </div>
    <Slider />
    <Vendor />
  </>
);

export default App;

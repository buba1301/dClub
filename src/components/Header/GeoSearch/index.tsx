/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import * as React from 'react';
import cn from 'classnames';
import { GoLocation } from 'react-icons/go';
import { GrClose } from 'react-icons/gr';

import s from './Search.module.scss';

// TODO: добавить дебаунс для поиска
// TODO: добавить поиск на сервере
// TODO: ДОбавить вывод списка найденых совпадений

const Search = () => {
  const [searchToogle, setSearchToogle] = React.useState(false);

  const ref = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (ref.current !== null) {
      ref.current.focus();
    }
  }, [searchToogle]);

  const className = cn({
    [s.filtersContainer]: true,
    [s.openInput]: searchToogle,
  });

  const handleClick = () => {
    setSearchToogle((prevState) => !prevState);
  };

  if (searchToogle) {
    return (
      <>
        <div className={className}>
          <div className={s.searchWrap}>
            <div className={s.geoContainer}>
              <GoLocation size={20} />
            </div>
            <div className={s.inputContainer}>
              <input placeholder="Укажите адрес доставки" type="text" ref={ref} />
            </div>
            <div className={s.geoContainer}>
              <GrClose size={20} onClick={handleClick} />
            </div>
          </div>
        </div>

        <div className={s.listWrap}>
          <p>blablabla</p>
          <p>blablabla</p>
        </div>
        <div className={s.backLayer} onClick={handleClick} />
      </>
    );
  }
  return (
    <div className={className} onClick={handleClick}>
      <div className={s.geoContainer}>
        <GoLocation size={20} />
      </div>
      <span className={s.addresContainer}>Адрес доставки</span>
    </div>
  );
};

export default Search;

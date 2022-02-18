/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import * as React from 'react';
import cn from 'classnames';
import { GoLocation } from 'react-icons/go';
import { GrClose } from 'react-icons/gr';

import s from './GeoSearch.module.scss';

// TODO: добавить дебаунс для поиска
// TODO: добавить поиск на сервере
// TODO: Добавить вывод списка найденых совпадений
// TODO: Реализовать фильтрацию по геопозиции
// TODO: добавить вывод формы для адресов для телефонов

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
    // [s.openInput]: searchToogle,
  });

  const handleClick = () => {
    setSearchToogle((prevState) => !prevState);
  };

  return (
    <>
      <div className={className} onClick={handleClick}>
        <div className={s.geoContainer}>
          <GoLocation size={20} />
        </div>
        <span className={s.addresContainer}>Адрес доставки</span>
      </div>

      {searchToogle && (
        <>
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

          <div className={s.listWrap}>
            <p>blablabla</p>
            <p>blablabla</p>
          </div>
          <div className={s.backLayer} onClick={handleClick} />
        </>
      )}
    </>
  );
};

export default Search;

/*
.searchWrap {
  position: fixed;
  width: calc(100% - 525px);
  height: 72px;
  border-bottom: 1px solid #e3e4e6;
  background-color: white;
  z-index: 2000;

  display: grid;
  grid-template-columns: 100px minmax(120px, 1fr) 100px;
  justify-content: space-around;
  align-content: center;
} */

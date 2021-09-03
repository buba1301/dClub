/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import * as React from 'react';
import cn from 'classnames';
import { GoLocation } from 'react-icons/go';
import { GrClose } from 'react-icons/gr';

import s from './Search.module.scss';

const Search = () => {
  const [searchToogle, setSearchToogle] = React.useState(false);

  const className = cn({
    [s.filtersContainer]: true,
    [s.openInput]: searchToogle,
  });

  const handleClick = () => {
    setSearchToogle((prevState) => !prevState);
  };

  return (
    <div className={className} onClick={handleClick}>
      {!searchToogle ? (
        <>
          <div className={s.geoContainer}>
            <GoLocation size={20} />
          </div>
          <span className={s.addresContainer}>Адрес доставки</span>
        </>
      ) : (
        <>
          <div className={s.inputWrap}>
            <div className={s.geoContainer}>
              <GoLocation size={20} />
            </div>
            <div>
              <input />
            </div>
            <div className={s.geoContainer}>
              <GrClose size={20} />
            </div>
          </div>
          <div className={s.listWrap}>blablabla</div>
        </>
      )}
    </div>
  );
};

export default Search;

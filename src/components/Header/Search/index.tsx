/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import * as React from 'react';
import { GrSearch, GrClose } from 'react-icons/gr';

import s from './Search.module.scss';

// TODO: реализовать поиск по словам
// TODO: сделать инпут слошным
// TODO: добавить спинер при поиске вместо лупы

const Serach = () => {
  const [searchToogle, setSearchToogle] = React.useState(false);
  const [searchData, setSearchData] = React.useState<string[]>([]);

  const ref = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (ref.current !== null) {
      ref.current.focus();
    }
  }, [searchToogle]);

  const handleClick = () => {
    setSearchToogle((prevState) => !prevState);
  };

  return (
    <>
      <button type="button" className={s.searchContainer} onClick={handleClick}>
        <GrSearch size={20} />
        <span>Поиск</span>
      </button>
      {searchToogle && (
        <>
          <div className={s.inputContainer}>
            <div className={s.inputWrap}>
              <div className={s.iconsLeft}>
                <GrSearch size={20} />
              </div>
              <input
                type="text"
                placeholder="Ресторан, блюдо или товар"
                ref={ref}
              />
              <div className={s.iconsRight}>
                <GrClose size={20} onClick={handleClick} />
              </div>
            </div>
          </div>
          <div className={s.backLayer} onClick={handleClick} />
        </>
      )}
    </>
  );
};

export default Serach;

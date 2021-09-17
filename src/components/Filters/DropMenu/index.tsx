import * as React from 'react';
import useOnClickOutside from '../../../hooks/useOnClickOutSide';
import { FiltersItems } from '../../../utils/filters';

import s from './DropMenu.module.scss';

type Props = {
  setOpenDrop: Function;
  dropMenu: FiltersItems;
};

const DropMenu = ({ setOpenDrop, dropMenu }: Props) => {
  const ref = React.useRef<HTMLDivElement>(null);

  const { type, types } = dropMenu;

  const handlClick = () => {
    setOpenDrop && setOpenDrop(false);
  };

  useOnClickOutside(ref, handlClick);

  const style = {
    left: type === 'kitchen' ? '300px' : '0',
  };

  return (
    <div className={s.container} style={style} ref={ref}>
      <form className={s.formWrap}>
        <div className={s.content}>
          {types &&
            types.map((item) => (
              <div key={item.type} className={s.itemWrap}>
                <input type="checkbox" id={item.type} />
                <label htmlFor={item.type}>{item.name}</label>
              </div>
            ))}
        </div>
        <div className={s.buttonContainer}>
          <button type="submit">Применить</button>
        </div>
      </form>
    </div>
  );
};

export default DropMenu;

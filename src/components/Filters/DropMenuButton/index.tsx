/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import * as React from 'react';
import cn from 'classnames';
import useOnClickOutside from '../../../hooks/useOnClickOutSide';
import { TypesList } from '../../../utils/filters';
// import FiltersContext from '../../../Context';

import s from './DropMenu.module.scss';

type Props = {
  name: string;
  type: string;
  types: TypesList[];
};

const DropMenuButton = ({ name, type, types }: Props) => {
  const [openDrop, setOpenDrop] = React.useState(false);
  const [active] = React.useState(false);

  // const dispatch = React.useContext(FiltersContext);

  const ref = React.useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setOpenDrop((prevState) => !prevState);
  };

  const handleClickOutside = (event: MouseEvent) => {
    const { id } = event.target as Element;

    if (type !== id) {
      setOpenDrop(false);
    }
  };

  useOnClickOutside(ref, handleClickOutside);

  const classNames = cn(s.itemContainer, {
    [s.active]: active,
  });

  const style = {
    left: type === 'kitchen' ? '300px' : '0',
  };

  return (
    <>
      <div className={classNames} id={type} onClick={handleClick}>
        {name}
      </div>
      {openDrop && (
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
      )}
    </>
  );
};

export default DropMenuButton;

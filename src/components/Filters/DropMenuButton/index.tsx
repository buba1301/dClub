/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import * as React from 'react';
import { find } from 'lodash';
import cn from 'classnames';
import useOnClickOutside from '../../../hooks/useOnClickOutSide';
import { ActiveFilters, TypesList } from '../../../utils/filters';
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
  const [checkedFiltersList, setChecked] = React.useState<ActiveFilters[]>([]);

  // const dispatch = React.useContext(FiltersContext);

  const ref = React.useRef<HTMLDivElement>(null);

  const handleClickOpen = () => {
    !openDrop && setOpenDrop(true);
  };

  const handleClickOutside = (event: MouseEvent) => {
    const { id } = event.target as Element;

    if (type !== id) {
      setOpenDrop(false);
    }
  };

  const handleCheck = (event: React.SyntheticEvent<HTMLInputElement>) => {
    const { id } = event.target as Element;

    setChecked((prevState) =>
      find(prevState, { type: id })
        ? prevState.filter((item) => item.type !== id)
        : [...prevState, { type: id }],
    );
  };

  useOnClickOutside(ref, handleClickOutside);

  // const isDisable = checkedFiltersList.length === 0;

  const classNames = cn(s.itemContainer, {
    [s.active]: active,
  });

  const style = {
    left: type === 'kitchen' ? '300px' : '0',
  };

  return (
    <>
      <div className={classNames} id={type} onClick={handleClickOpen}>
        {name}
      </div>
      {openDrop && (
        <div className={s.container} style={style} ref={ref}>
          <form className={s.formWrap}>
            <div className={s.content}>
              {types &&
                types.map((item) => (
                  <label
                    htmlFor={item.type}
                    key={item.type}
                    className={s.itemWrap}>
                    <input
                      type="checkbox"
                      id={item.type}
                      onClick={handleCheck}
                    />
                    <span>{item.name}</span>
                  </label>
                ))}
            </div>
            <div className={s.buttonContainer}>
              {checkedFiltersList.length !== 0 ? (
                <>
                  <button type="button">Сбросить</button>
                  <button type="submit">Применить</button>
                </>
              ) : (
                <button type="submit">Применить</button>
              )}
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default DropMenuButton;

/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import * as React from 'react';
// mport { find } from 'lodash';
import cn from 'classnames';
import useOnClickOutside from '../../../hooks/useOnClickOutSide';
import { ActiveFilters, TypesList } from '../../../utils/filters';
// import FiltersContext from '../../../Context';

import s from './DropMenu.module.scss';
import CheckBox from './CheckBox';

type Props = {
  name: string;
  type: string;
  types: TypesList[];
};

/* type State = {
  checkedSortFilter: TypesList;
  chekedKitchenFilters: TypesList[];
}; */

/* type State = {
  sortCheckBox: string;
  kitchenCheckBox: {
    [key: string]: string;
  };
};

type Action = {
  type: string;
  payload: TypesList;
}; */

/* const reducerCheckedFilters = (state: State, action: Action) => {
  switch (action.type) {
    case 'sortAdd':
      return { ...state, checkedSortFilter: action.payload };
    case 'sortRemove':
      return { ...state, checkedSortFilter: '' };
    case 'kitchenAdd':
      return {
        ...state,
        chekedKitchenFilters: [...state.chekedKitchenFilters, action.payload],
      };
    case 'kitchenRemove':
      return {
        ...state,
        chekedKitchenFilters: state.chekedKitchenFilters.filter(
          (item) => item.type !== action.payload.type,
        ),
      };
    default:
      throw new Error();
  }
}; */

const DropMenuButton = ({ name, type, types }: Props) => {
  const [openDrop, setOpenDrop] = React.useState(false);
  const [sortType, setSortType] = React.useState('');
  const [checkedFiltersList] = React.useState<ActiveFilters[]>([]);
  /* const [, dispatchCheckedFilters] = React.useReducer(reducerCheckedFilters, {
    checkedSortFilter: '',
    chekedKitchenFilters: [],
  }); */

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

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    // console.log('FORM', event);
  };

  useOnClickOutside(ref, handleClickOutside);

  // const isDisable = checkedFiltersList.length === 0;

  const classNames = cn(s.itemContainer, {
    // [s.active]: active,
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
          <form className={s.formWrap} onSubmit={handleSubmit}>
            <div className={s.content}>
              {types &&
                types.map((item) => (
                  <CheckBox
                    key={item.type}
                    type={item.type}
                    name={item.name}
                    filterType={type}
                    sortType={sortType}
                    setSortType={setSortType}
                  />
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

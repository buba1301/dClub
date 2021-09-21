/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import * as React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
// mport { find } from 'lodash';
import cn from 'classnames';
import useOnClickOutside from '../../../hooks/useOnClickOutSide';
import { ActiveFilters, TypesList } from '../../../utils/filters';
// import FiltersContext from '../../../Context';

import s from './DropMenu.module.scss';
import CheckBox from './CheckBox';
import useLockBodyScroll from '../../../hooks/useLockBodyScroll';

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

  const methods = useForm();
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
      setSortType('');
      methods.reset();
    }
  };

  /* const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('FORM', event);
  }; */

  const onSubmit = (data: any) => null;

  // console.log('FOrm value', data)

  useOnClickOutside(ref, handleClickOutside);
  useLockBodyScroll(openDrop);

  // const isDisable = checkedFiltersList.length === 0;

  const classNamesItemContainer = cn(s.itemContainer, {
    // [s.active]: active,
  });

  const classNameContainer = cn(s.container, {
    [s.kitchenFilter]: type === 'kitchen',
    [s.sortFilter]: type === 'sort',
  });

  return (
    <>
      <div
        className={classNamesItemContainer}
        id={type}
        onClick={handleClickOpen}>
        {name}
      </div>
      {openDrop && (
        <>
          <div className={classNameContainer} ref={ref}>
            <FormProvider {...methods}>
              <form
                className={s.formWrap}
                onSubmit={methods.handleSubmit(onSubmit)}>
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
            </FormProvider>
          </div>
          <div className={s.background} />
        </>
      )}
    </>
  );
};

export default DropMenuButton;

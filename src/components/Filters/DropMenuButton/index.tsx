/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import * as React from 'react';
import cn from 'classnames';
import useOnClickOutside from '../../../hooks/useOnClickOutSide';
import { TypesList } from '../../../utils/filters';

import s from './DropMenu.module.scss';
import useLockBodyScroll from '../../../hooks/useLockBodyScroll';
import normalizeFiltersList from '../../../utils/normalize';

type Props = {
  name: string;
  type: string;
  types: TypesList[];
  active: boolean | undefined;
  setActiveFilters: Function;
};

const DropMenuButton = ({
  name,
  type,
  types,
  active,
  setActiveFilters,
}: Props) => {
  const [openDrop, setOpenDrop] = React.useState(false);
  const [buttonDisable, setButtonDisable] = React.useState(true);
  const [filtersTypes, setfiltersTypes] = React.useState<TypesList[]>([]);

  const matchMediaValue = '(max-width: 640px)';

  const ref = React.useRef<HTMLDivElement>(null);

  const resetFilters = {
    resetfiltersTypes: () =>
      setfiltersTypes((prevState) =>
        prevState.map((item) => ({ ...item, active: false })),
      ),
    resetActiveFilters: () =>
      setActiveFilters((prevState: any) =>
        prevState.map((item: any) =>
          item.type === type ? { ...item, active: false } : item,
        ),
      ),
  };

  React.useEffect(() => {
    setfiltersTypes(normalizeFiltersList(types));
  }, []);

  React.useEffect(() => {
    if (active === false) {
      resetFilters.resetfiltersTypes();
      resetFilters.resetActiveFilters();
    }
  }, [active]);

  React.useEffect(() => {
    const hasActiveFilter = filtersTypes.map((item) => item.active);

    setButtonDisable(!hasActiveFilter.includes(true));
  }, [filtersTypes]);

  const handleClickOpen = () => {
    !openDrop && setOpenDrop(true);
  };

  const handleClickOutside = (event: MouseEvent) => {
    const { id } = event.target as Element;

    if (type !== id) {
      setOpenDrop(false);
      resetFilters.resetfiltersTypes();
    }
  };

  const handleReset = () => {
    resetFilters.resetfiltersTypes();
    resetFilters.resetActiveFilters();
  };

  const handleChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;

    const mapped = (item: TypesList) => {
      const currentItem = {
        ...item,
        active: !item.active,
      };

      const otherItem = type === 'sort' ? { ...item, active: false } : item;

      return item.type === value ? currentItem : otherItem;
    };

    setfiltersTypes((prevState) => prevState.map(mapped));
  };

  const onSubmit = (data: any) => {
    setOpenDrop(false);
    setActiveFilters((prevState: any) =>
      prevState.map((item: any) =>
        item.type === type ? { ...item, active: !item.active } : item,
      ),
    );
  };

  useOnClickOutside(ref, handleClickOutside);

  useLockBodyScroll(openDrop, matchMediaValue);

  const classNamesItemContainer = cn(s.itemContainer, {
    [s.active]: active,
  });

  const classNamesContainer = cn(s.container, {
    [s.kitchenFilter]: type === 'kitchen',
    [s.sortFilter]: type === 'sort',
  });

  const classNamesButton = cn(s.buttonSubmit, {
    [s.buttonDisabled]: buttonDisable,
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
          <div className={classNamesContainer} ref={ref}>
            <form className={s.formWrap} onSubmit={onSubmit}>
              <div className={s.content}>
                {filtersTypes &&
                  filtersTypes.map((item) => (
                    <label
                      htmlFor={item.type}
                      key={item.type}
                      className={s.itemWrap}>
                      <input
                        type="checkbox"
                        name={item.type}
                        id={item.type}
                        value={item.type}
                        checked={item.active}
                        onChange={handleChange}
                      />
                      <span>{item.name}</span>
                    </label>
                  ))}
              </div>
              <div className={s.buttonContainer}>
                {!buttonDisable ? (
                  <>
                    <button
                      type="button"
                      className={s.buttonReset}
                      onClick={handleReset}>
                      Сбросить
                    </button>
                    <button type="submit" className={s.buttonSubmit}>
                      Применить
                    </button>
                  </>
                ) : (
                  <button
                    type="submit"
                    className={classNamesButton}
                    disabled={buttonDisable}>
                    Применить
                  </button>
                )}
              </div>
            </form>
          </div>
          <div className={s.background} />
        </>
      )}
    </>
  );
};

export default DropMenuButton;

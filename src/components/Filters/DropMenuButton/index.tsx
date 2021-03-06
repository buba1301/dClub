/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import * as React from 'react';
import cn from 'classnames';
import useOnClickOutside from '../../../hooks/useOnClickOutSide';
import { filterTypesList } from '../../../utils/filters';

import s from './DropMenu.module.scss';
import useLockBodyScroll from '../../../hooks/useLockBodyScroll';
import normalizeFiltersList from '../../../utils/normalize';
// import FiltersContext from '../../../Context';

type Props = {
  name: string;
  type: string;
  filterTypes: filterTypesList[];
  active: boolean | undefined;
  setActiveFilters: Function;
};

const DropMenuButton = ({
  name,
  type,
  filterTypes,
  active,
  setActiveFilters,
}: Props) => {
  const [openDrop, setOpenDrop] = React.useState(false);
  const [buttonDisable, setButtonDisable] = React.useState(true);
  const [activeFilterTypes, setActiveFilterTypes] = React.useState<
    filterTypesList[]
  >([]);

  // const setVendorList = React.useContext(FiltersContext);

  const matchMediaValue = '(max-width: 640px)';

  const ref = React.useRef<HTMLDivElement>(null);

  const resetFilters = {
    resetfiltersTypes: () =>
      setActiveFilterTypes((prevState) =>
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
    setActiveFilterTypes(normalizeFiltersList(filterTypes));
  }, []);

  React.useEffect(() => {
    if (active === false) {
      resetFilters.resetfiltersTypes();
      resetFilters.resetActiveFilters();
    }
  }, [active]);

  React.useEffect(() => {
    const hasActiveFilter = activeFilterTypes.map((item) => item.active);

    setButtonDisable(!hasActiveFilter.includes(true));
    setActiveFilters((prevState: any) =>
      prevState.map((item: any) =>
        item.type === type ? { ...item, active: false } : item,
      ),
    );
  }, [activeFilterTypes]);

  const handleClickOpen = () => {
    !openDrop && setOpenDrop(true);
  };

  const handleClickOutside = (event: MouseEvent) => {
    const { id } = event.target as Element;

    if (type !== id) {
      setOpenDrop(false);

      if (!active) {
        resetFilters.resetfiltersTypes();
      }
    }
  };

  const handleReset = () => {
    resetFilters.resetfiltersTypes();
    resetFilters.resetActiveFilters();
  };

  const handleChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;

    const mapped = (item: filterTypesList) => {
      const currentItem = {
        ...item,
        active: !item.active,
      };

      const otherItem = type === 'sort' ? { ...item, active: false } : item;

      return item.type === value ? currentItem : otherItem;
    };

    setActiveFilterTypes((prevState) => prevState.map(mapped));
  };

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    setOpenDrop(false);
    setActiveFilters((prevState: any) =>
      prevState.map((item: any) =>
        item.type === type ? { ...item, active: true } : item,
      ),
    );
    // ???????????? ???? ???????????? ?????? ?? ?????????? ?? ????????????????
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
            <form className={s.formWrap} onSubmit={handleSubmit}>
              <div className={s.content}>
                {activeFilterTypes &&
                  activeFilterTypes.map((item) => (
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
                      ????????????????
                    </button>
                    <button type="submit" className={s.buttonSubmit}>
                      ??????????????????
                    </button>
                  </>
                ) : (
                  <button
                    type="submit"
                    className={classNamesButton}
                    disabled={buttonDisable}>
                    ??????????????????
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

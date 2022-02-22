import * as React from 'react';
import cn from 'classnames';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import SliderCard from './SliderCard';

import s from './Slider.module.scss';

// TODO: добавить переходы по карточкам

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

type State = {
  scroller: HTMLDivElement | null;
  itemWidth: number | undefined;
};

const Slider = () => {
  const shiftValue = 4;
  const pageCount = Math.floor(data.length / shiftValue);

  const containerRef = React.useRef<HTMLDivElement>(null);

  const [pageShift, setPageShift] = React.useState<number>(0);

  const [stateUI, setStateUI] = React.useState<State>({
    scroller: null,
    itemWidth: 0,
  });

  React.useEffect(() => {
    const scroller = containerRef.current;
    const itemWidth = containerRef.current?.firstElementChild?.clientWidth;

    setStateUI({ ...stateUI, scroller, itemWidth });
  }, []);

  const handleClickRight = () => {
    stateUI.scroller?.scrollBy({
      left: stateUI.itemWidth! * shiftValue,
      top: 0,
      behavior: 'smooth',
    });

    setPageShift((prevState) => prevState + 1);
  };

  const handleClickLeft = () => {
    stateUI.scroller?.scrollBy({
      left: -stateUI.itemWidth! * shiftValue,
      top: 0,
      behavior: 'smooth',
    });

    setPageShift((prevState) => prevState - 1);
  };

  const classNamesRight = cn(s.buttonWrap, s.right);
  const classNamesLeft = cn(s.buttonWrap, s.left);

  return (
    <div className={s.wrap}>
      <div className={s.container} ref={containerRef}>
        {data.map((item) => (
          <SliderCard key={item} id={item}>
            {item}
          </SliderCard>
        ))}
      </div>
      {pageShift < pageCount && (
        <button
          className={classNamesRight}
          type="button"
          onClick={handleClickRight}>
          <FiChevronRight />
        </button>
      )}
      {pageShift > 0 && (
        <button
          className={classNamesLeft}
          type="button"
          onClick={handleClickLeft}>
          <FiChevronLeft />
        </button>
      )}
    </div>
  );
};

export default Slider;

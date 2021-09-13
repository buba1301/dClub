import * as React from 'react';
import cn from 'classnames';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import SliderCard from './SliderCard';

import s from './Slider.module.scss';

// TODO: убрать скрол бар в хроме

type ShiftValues = {
  [key: string]: number;
};

const shiftValues: ShiftValues = {
  '1': 146,
  '2': 438,
  '3': 730,
  '4': 950,
  '5': 1128,
};

const getShiftValue = (key: string): number => shiftValues[key];

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

const Slider = () => {
  const itemPerPage = 4;

  const [list] = React.useState(data);
  const [page, setPage] = React.useState(1);
  const [firstIndexNextPage, setFirstIndex] = React.useState(4);
  const [lastIndexNextPage, setLastIndex] = React.useState(9);
  const [shiftPage, setShiftPage] = React.useState(0);

  const firstPage = 1;
  const lastPage = Math.ceil(list.length / 4);

  const handleClickRight = () => {
    setPage((prevState) => prevState + 1);

    const nextPageList = list.slice(firstIndexNextPage, lastIndexNextPage);

    const shiftValue = getShiftValue(nextPageList.length.toString());

    setFirstIndex((prevState) => prevState + itemPerPage);
    setLastIndex((prevState) => prevState + itemPerPage + 1);

    setShiftPage((prevState) => prevState + shiftValue);
  };

  const handleClickLeft = () => {
    setPage((prevState) => prevState - 1);

    const prewPageList = list.slice(firstIndexNextPage - itemPerPage, lastIndexNextPage - itemPerPage - 1);

    const shiftValue = getShiftValue(prewPageList.length.toString());

    setFirstIndex((prevState) => prevState - itemPerPage);
    setLastIndex((prevState) => prevState - itemPerPage - 1);

    setShiftPage((prevState) => prevState - shiftValue);
  };

  const style = {
    left: `-${shiftPage}px`,
  };

  const classNamesRight = cn(s.buttonWrap, s.right);
  const classNamesLeft = cn(s.buttonWrap, s.left);

  return (
    <div className={s.wrap}>
      <div className={s.container} style={style}>
        {data.map((item) => (
          <SliderCard key={item}>{item}</SliderCard>
        ))}
      </div>
      {page !== lastPage && (
        <button className={classNamesRight} type="button" onClick={handleClickRight}>
          <FiChevronRight />
        </button>
      )}
      {page !== firstPage && (
        <button className={classNamesLeft} type="button" onClick={handleClickLeft}>
          <FiChevronLeft />
        </button>
      )}
    </div>
  );
};

export default Slider;

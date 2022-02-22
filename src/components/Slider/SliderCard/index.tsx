import * as React from 'react';

import s from './SliderCard.module.scss';

type Props = {
  children: number;
  id: number;
};

const SliderCard = ({ children, id }: Props) => {
  // fix linter error;

  const handleClickCard = (
    e: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>,
  ) => {
    const { target } = e;
    console.log(target);
  };

  return (
    <div
      className={s.container}
      id={id.toString()}
      aria-hidden
      onClick={handleClickCard}
      onKeyDown={handleClickCard}>
      <div className={s.card}>{children}</div>
    </div>
  );
};

export default SliderCard;

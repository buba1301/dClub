import * as React from 'react';
import cn from 'classnames';

import s from './Card.module.scss';

type Props = {
  name: string;
};

const Card = ({ name }: Props) => {
  const [] = React.useState();

  return (
    <div className={s.cards}>
      <div className={s.image} />
      <div className={s.infoContainer}>
        <div className={s.vendorName}>
          <h3>{name}</h3>
        </div>
        <div className={s.specContainer}>
          <div className={cn(s.badge, s.orderTime)}>1</div>
          <div className={cn(s.badge, s.orderSum)}>2</div>
          <div className={cn(s.badge, s.rating)}>3</div>
        </div>
      </div>
    </div>
  );
};

export default Card;

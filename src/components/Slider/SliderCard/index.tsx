import * as React from 'react';

import s from './SliderCard.module.scss';

type Props = {
  children: number;
};

const SliderCard = ({ children }: Props) => <div className={s.container}>{children}</div>;

export default SliderCard;

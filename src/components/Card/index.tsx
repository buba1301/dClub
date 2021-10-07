import * as React from 'react';

import s from './Card.module.scss';

type Props = {
  name: string;
};

const Card = ({ name }: Props) => {
  const [] = React.useState();

  return <div className={s.cards}>{name}</div>;
};

export default Card;

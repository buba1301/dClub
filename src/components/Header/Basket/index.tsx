import * as React from 'react';
import { GrBasket } from 'react-icons/gr';
import cn from 'classnames';

import s from './Bascket.module.scss';

const Buscket = () => {
  const [basketItems] = React.useState<string[]>([]);

  const classNameNotEmptyBasket = basketItems.length !== 0 ? 'notEmpty' : 'empty';

  const classNames = cn(s.basketContainer, s[classNameNotEmptyBasket as keyof typeof s]);

  return (
    <div className={classNames}>
      <GrBasket size={20} />
      <span>Корзина</span>
    </div>
  );
};

export default Buscket;

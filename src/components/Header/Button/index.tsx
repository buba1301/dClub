import * as React from 'react';
import cn from 'classnames';

import s from './Button.module.scss';

import { ButtonData } from '../RegForm';

type Props = ButtonData;

const Button = ({ logo, text, type }: Props) => {
  const classNames = cn(s.container, s[type as keyof typeof s]);

  return (
    <a href="/" className={classNames}>
      {logo}
      {text}
    </a>
  );
};

export default Button;

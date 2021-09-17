import * as React from 'react';
import useOnClickOutside from '../../../hooks/useOnClickOutSide';
import { TypesList } from '../../../utils/filters';

import s from './DropMenu.module.scss';

type Props = {
  setOpenDrop: Function;
  dropMenuTypesList: TypesList[];
};

const DropMenu = ({ setOpenDrop, dropMenuTypesList }: Props) => {
  const ref = React.useRef<HTMLDivElement>(null);

  useOnClickOutside(ref, setOpenDrop);

  return (
    <div className={s.container} ref={ref}>
      {dropMenuTypesList.map((item) => (
        <div key={item.type}>{item.name}</div>
      ))}
    </div>
  );
};

export default DropMenu;

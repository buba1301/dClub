import * as React from 'react';

import s from './CheckBox.module.scss';

type Props = {
  type: string;
  name: string;
  filterType: string;
  sortType: string;
  setSortType: React.Dispatch<React.SetStateAction<string>>;
};

const CheckBox = ({ type, name, filterType, sortType, setSortType }: Props) => {
  const [active, setActive] = React.useState(false);

  const handleChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    const { id } = event.currentTarget;

    filterType === 'sort'
      ? setSortType((prevState) => (prevState !== id ? id : ''))
      : setActive((prevState) => !prevState);
  };

  return (
    <label htmlFor={type} key={type} className={s.itemWrap}>
      <input
        type="checkbox"
        name={type}
        id={type}
        checked={filterType === 'sort' ? sortType === type : active}
        onChange={handleChange}
      />
      <span>{name}</span>
    </label>
  );
};

export default CheckBox;

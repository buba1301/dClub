/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

import s from './CheckBox.module.scss';

type Props = {
  type: string;
  name: string;
  filterType: string;
  sortType: string;
  setSortType: React.Dispatch<React.SetStateAction<string>>;
  register: any;
  reset: any;
};

const CheckBox = ({
  type,
  name,
  filterType,
  sortType,
  setSortType,
  register,
  reset,
}: Props) => {
  const [active, setActive] = React.useState(false);

  const formValue = register(type);

  const handleChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    const { id } = event.currentTarget;

    if (filterType === 'sort') {
      setSortType((prevState) => (prevState !== id ? id : ''));
      reset();
    } else {
      setActive((prevState) => !prevState);
    }
    /* filterType === 'sort'
        ? setSortType((prevState) => (prevState !== id ? id : ''))
        : setActive((prevState) => !prevState); */
  };

  return (
    <label htmlFor={type} key={type} className={s.itemWrap}>
      <input
        type="checkbox"
        name={type}
        id={type}
        ref={formValue.ref}
        checked={filterType === 'sort' ? sortType === formValue.name : active}
        onChange={(e) => {
          handleChange(e);
          formValue.onChange(e);
        }}
      />
      <span>{name}</span>
    </label>
  );
};

export default CheckBox;

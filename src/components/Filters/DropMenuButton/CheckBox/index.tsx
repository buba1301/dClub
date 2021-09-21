/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import { useFormContext } from 'react-hook-form';

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

  const { register, reset } = useFormContext();

  const formValue = register(type as `${string}`);

  const handleChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    const { id } = event.currentTarget;

    if (filterType === 'sort') {
      setSortType((prevState) => (prevState !== id ? id : ''));
      reset();
    } else {
      setActive((prevState) => !prevState);
    }
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

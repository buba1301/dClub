import * as React from 'react';
import { FaQq } from 'react-icons/fa';
import RegFrom from '../RegForm';

import s from './Login.module.scss';

const Login = () => {
  const [toogle, setToogle] = React.useState(true);

  const handleClick = (): void => {
    setToogle((prevValue) => !prevValue);
  };

  return (
    <>
      <button type="button" className={s.buttonContainer} onClick={handleClick}>
        <FaQq size={20} />
        <span>Войти</span>
      </button>

      {toogle && <RegFrom onClick={handleClick} />}
    </>
  );
};

export default Login;

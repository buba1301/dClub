/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import * as React from 'react';
import { GrClose } from 'react-icons/gr';
import { IoLogoVk } from 'react-icons/io5';
import { GiPiggyBank } from 'react-icons/gi';
import Button from '../Button';

import s from './RegForm.module.scss';
import useOnClickOutside from '../../../hooks/useOnClickOutSide';

// TODO: добавить переход к пользовательскому соглашению
// TODO: добавить переход с передаваемым данным
// TODO: text in i18next
// TODO: регистрация по номеру телефона
// TODO: рег через вк, переход в вк
// TODO: рег через сбер, переход на сбер

type Company = 'sber' | 'vk';

export interface ButtonData {
  logo: React.ReactElement;
  text: string;
  type: Company;
}

const buttonData: ButtonData[] = [
  {
    logo: <GiPiggyBank size={20} />,
    text: 'Войти через Сбер ID',
    type: 'sber',
  },
  {
    logo: <IoLogoVk size={20} />,
    text: 'Войти через VK Connect',
    type: 'vk',
  },
];

type Props = {
  onClick: () => void;
};

const RegFrom = ({ onClick }: Props) => {
  const refContainer = React.useRef<HTMLDivElement>(null);
  const refInput = React.useRef<HTMLInputElement>(null);

  useOnClickOutside(refContainer, onClick);

  React.useEffect(() => {
    if (refInput.current !== null) {
      refInput.current.focus();
    }
  }, []);

  return (
    <div className={s.overlay}>
      <div className={s.container} ref={refContainer}>
        <div className={s.closeButton} onClick={onClick}>
          <GrClose size={20} />
        </div>
        <div className={s.body}>
          <div className={s.contant}>
            <div className={s.loginTitle}>Войдите в аккаунт</div>
            <div className={s.loginForm}>
              <div className={s.formFieldWrap}>
                <label htmlFor="phone">
                  <p>Телефон</p>
                  <input id="phone" name="phone" type="text" ref={refInput} />
                </label>
              </div>
            </div>
            <div className={s.agreement}>
              Указывая номер телефона, вы принимаете условия
              <br />
              <a href="">пользовательского соглашения</a>
            </div>
          </div>
          <div className={s.loginConnections}>
            <div className={s.loginConnectionsTitle}>Другие способы входа</div>
            <div className={s.loginConnectionsLinks}>
              {buttonData.map((item: ButtonData) => (
                <Button logo={item.logo} text={item.text} type={item.type} key={item.type} />
              ))}
            </div>
            <a href="" className={s.loginConnectionsData}>
              Передаваемые данные
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegFrom;

import * as React from 'react';
import cn from 'classnames';

import s from './Tabs.module.scss';

// TODO: прикрутить роутер
// TODO: добавить на мобилке в первом елементе две ссылки магазины и аптеки
// TODO: добавить слайдет средний элемент на мобилке

type SiteChaptersName = {
  id: string;
  name: string;
  active: boolean;
};

const siteChaptersName: SiteChaptersName[] = [
  {
    id: 'restorant',
    name: 'Рестораны',
    active: true,
  },
  {
    id: 'shops',
    name: 'Магазины',
    active: false,
  },
  {
    id: 'promo',
    name: 'Акции',
    active: false,
  },
];

type Props = {
  setCurrentTab: Function;
};

const Tabs = ({ setCurrentTab }: Props) => {
  const [chapters, setChapters] = React.useState<SiteChaptersName[]>(siteChaptersName);

  const handleClick = (event: React.SyntheticEvent<HTMLButtonElement>) => {
    const { id } = event.currentTarget;

    setChapters((prevState) =>
      prevState.map((item) => ({
        ...item,
        active: item.id === id,
      })),
    );

    setCurrentTab && setCurrentTab(id);
  };

  return (
    <div className={s.tabsContainer}>
      {chapters.map((item: SiteChaptersName) => (
        <div className={cn(s[item.id as keyof typeof s], s.tab)} key={item.id}>
          <button
            type="button"
            id={item.id}
            className={cn(s.tabButton, { [s.activeTab]: item.active })}
            onClick={handleClick}>
            <h1>{item.name}</h1>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Tabs;

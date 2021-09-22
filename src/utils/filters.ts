export type ActiveFilters = {
  type: string | string[];
};

export type TypesList = {
  name: string;
  type: string;
  active?: boolean;
};

export type FiltersItems = {
  type: string;
  name: string;
  types?: TypesList[];
  active?: boolean;
};

export const restorantFilters: FiltersItems[] = [
  {
    type: 'sort',
    name: '||',
    types: [
      {
        type: 'forYou',
        name: 'Отобранные для вас',
      },
      {
        type: 'fast',
        name: 'С самой быстрой доставкой',
      },
      {
        type: 'top',
        name: 'С высоким рейтингом',
      },
      {
        type: 'popular',
        name: 'Самые популярные',
      },
    ],
  },
  {
    type: 'like',
    name: 'Любимые',
  },
  {
    type: 'takeAway',
    name: 'Навынос',
  },
  {
    type: 'promo',
    name: 'Акции',
  },
  {
    type: 'kitchen',
    name: 'Кухни',
    types: [
      {
        type: 'susi',
        name: 'Суши',
      },
      {
        type: 'pizza',
        name: 'Пицца',
      },
      {
        type: 'burger',
        name: 'Бургеры',
      },
      {
        type: 'kebab',
        name: 'Шашлыки',
      },
      {
        type: 'meat & fish',
        name: 'Мясо и рыба',
      },
      {
        type: 'breakfast',
        name: 'Завтраки',
      },
      {
        type: 'lanch',
        name: 'Обеды',
      },
      {
        type: 'asian',
        name: 'Азиатская',
      },
      {
        type: 'russian',
        name: 'Русская',
      },
      {
        type: 'indian',
        name: 'Индийская',
      },
      {
        type: 'fastfood',
        name: 'Фастфуд',
      },
      {
        type: 'desert',
        name: 'Десерты',
      },
    ],
  },
  {
    type: 'booking',
    name: 'Бронирование',
  },
];

export const shopsFilters: FiltersItems[] = [
  {
    name: 'Продукты',
    type: 'food',
  },
  {
    name: 'Аптеки',
    type: 'pharmacy ',
  },
  {
    name: 'Косметика',
    type: 'cosmetics',
  },
];

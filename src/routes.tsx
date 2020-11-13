import React from 'react';

import HomePage from './pages/Home';
import PokedexPage from './pages/Pokedex';

interface IGeneralMenu {
  label: string;
  href: LinkEnum;
  component: () => JSX.Element;
}

export enum LinkEnum {
  HOME = '/',
  POKEDEX = '/pokedex',
  LEGENDARIES = '/legendaries',
  DOCUMENTATION = '/documentation',
}

export const GENERAL_MENU: IGeneralMenu[] = [
  {
    label: 'Home',
    href: LinkEnum.HOME,
    component: () => <HomePage />,
  },
  {
    label: 'Pokédex',
    href: LinkEnum.POKEDEX,
    component: () => <PokedexPage />,
  },
  {
    label: 'Legendaries',
    href: LinkEnum.LEGENDARIES,
    component: () => <p>TODO</p>,
  },
  {
    label: 'Documentation',
    href: LinkEnum.DOCUMENTATION,
    component: () => <p>TODO</p>,
  },
];

interface IAccMenu {
  [n: string]: () => JSX.Element;
}

const routes = GENERAL_MENU.reduce((acc: IAccMenu, item: IGeneralMenu) => {
  acc[item.href] = item.component;
  return acc;
}, {});

export default routes;

import React from 'react';

import HomePage from './pages/Home';
import PokedexPage from './pages/Pokedex';

interface IGeneralMenu {
  label: string;
  href: string;
  component: () => JSX.Element;
}

export const GENERAL_MENU: IGeneralMenu[] = [
  {
    label: 'Home',
    href: '/',
    component: () => <HomePage />,
  },
  {
    label: 'Pokédex',
    href: '/pokedex',
    component: () => <PokedexPage />,
  },
  {
    label: 'Legendaries',
    href: '/legendaries',
    component: () => <p>TODO</p>,
  },
  {
    label: 'Documentation',
    href: '/documentation',
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

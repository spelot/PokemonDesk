import React, { PropsWithChildren } from 'react';

import HomePage from './pages/Home';
import PokedexPage from './pages/Pokedex';
import PokemonPage, { IPokemonPage } from './pages/Pokemon';

interface IGeneralMenu {
  label: string;
  href: LinkEnum;
  component: (props?: PropsWithChildren<any>) => JSX.Element;
}

export enum LinkEnum {
  HOME = '/',
  POKEDEX = '/pokedex',
  LEGENDARIES = '/legendaries',
  DOCUMENTATION = '/documentation',
  POKEMON = '/pokedex/:id',
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

export const SECOND_ROUTES: IGeneralMenu[] = [
  {
    label: 'Pokemon',
    href: LinkEnum.POKEMON,
    component: ({ id }: IPokemonPage) => <PokemonPage id={id} />,
  },
];

interface IAccMenu {
  [n: string]: (props?: PropsWithChildren<any>) => JSX.Element;
}

const routes = [...GENERAL_MENU, ...SECOND_ROUTES].reduce((acc: IAccMenu, item: IGeneralMenu) => {
  acc[item.href] = item.component;
  return acc;
}, {});

export default routes;

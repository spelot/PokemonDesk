import React, { FC } from 'react';
import cn from 'classnames';

import s from './Header.module.scss';

import { ReactComponent as PokemonLogoSvg } from './assets/logo.svg';

interface ILink {
  key: number;
  label: string;
  href: string;
}

interface IHeader {
  activeLink: number;
}

const Header: FC<IHeader> = ({ activeLink }) => {
  const links: ILink[] = [
    { key: 0, label: 'Home', href: '/' },
    { key: 1, label: 'Pokédex', href: '/pokedex' },
    { key: 2, label: 'Legendaries', href: '/legendaries' },
    { key: 3, label: 'Documentation', href: '/documentation' },
  ];

  return (
    <div className={s.root}>
      <div className={cn(s.content)}>
        <div className={cn(s.logo)}>
          <PokemonLogoSvg />
        </div>
        <ul className={cn(s.menu)}>
          {links.map(({ key, label, href }, linkId) => (
            <li key={key}>
              <a className={cn(s.link, { [s.active]: linkId === activeLink })} href={href}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;

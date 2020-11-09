import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';

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

const Header: React.FC<IHeader> = ({ activeLink }) => {
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
          <Link
            to="/"
            className={cn({
              [s.notActiveLogo]: activeLink === 0,
            })}>
            <PokemonLogoSvg />
          </Link>
        </div>
        <ul className={cn(s.menu)}>
          {links.map(({ key, label, href }, linkId) => (
            <li key={key}>
              <Link className={cn(s.link, { [s.active]: linkId === activeLink })} to={href}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;

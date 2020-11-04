import React, { FC } from 'react';
import cn from 'classnames';

import s from './Header.module.scss';

const Header: FC = () => {
  const activeLink = 0;
  const links = [
    { key: 0, label: 'Home', href: 'home' },
    { key: 1, label: 'Pokédex', href: 'pokedex' },
    { key: 2, label: 'Legendaries', href: 'legendaries' },
    { key: 3, label: 'Documentation', href: 'documentation' },
  ];

  return (
    <div className={cn(s.Header)}>
      <div className={cn(s.content)}>
        <div className={cn(s.logo)} />
        <ul className={cn(s.menu)}>
          {links.map((link, linkId) => (
            <li key={link.key}>
              <a className={cn(s.link, { [s.active]: linkId === activeLink })} href={link.href}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;

import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import { A, usePath } from 'hookrouter';
import { GENERAL_MENU } from '../../routes';

import s from './Header.module.scss';

import { ReactComponent as PokemonLogoSvg } from './assets/logo.svg';

const Header: React.FC = () => {
  const path0 = usePath();
  const [path, setPath] = useState('');

  useEffect(() => {
    setPath(path0);
  }, [path0]);

  return (
    <div className={s.root}>
      <div className={s.content}>
        <div className={s.logo}>
          <A
            href="/"
            className={cn({
              [s.notActiveLogo]: path === '/',
            })}>
            <PokemonLogoSvg />
          </A>
        </div>
        <ul className={s.menu}>
          {GENERAL_MENU.map(({ label, href }) => (
            <li key={label}>
              <A className={cn(s.link, { [s.active]: href === path })} href={href}>
                {label}
              </A>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default React.memo(Header);

// import React from 'react';
// import cn from 'classnames';
// import { A } from 'hookrouter';
// import { GENERAL_MENU } from '../../routes';

// import s from './Header.module.scss';

// import { ReactComponent as PokemonLogoSvg } from './assets/logo.svg';

// const Header: React.FC = () => {
//   return (
//     <div className={s.root}>
//       <div className={s.content}>
//         <div className={s.logo}>
//           <A
//             href="/"
//             className={cn({
//               [s.notActiveLogo]: false,
//             })}>
//             <PokemonLogoSvg />
//           </A>
//         </div>
//         <ul className={s.menu}>
//           {GENERAL_MENU.map(({ label, href }) => (
//             <li key={label}>
//               <A className={cn(s.link, { [s.active]: false })} href={href}>
//                 {label}
//               </A>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default React.memo(Header);

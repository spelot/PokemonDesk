import React, { FC } from 'react';
import cn from 'classnames';

import s from './Header.module.scss';

const Header: FC = () => {
  return <div className={cn(s.Header)}>HEADER</div>;
};

export default Header;

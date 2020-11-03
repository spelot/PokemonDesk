import React, { FC } from 'react';
import cn from 'classnames';

import s from './Footer.module.scss';

const Footer: FC = () => {
  return <div className={cn(s.Footer)}>FOOTER</div>;
};

export default Footer;

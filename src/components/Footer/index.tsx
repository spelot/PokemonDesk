import React, { FC } from 'react';
import cn from 'classnames';

import s from './Footer.module.scss';

const Footer: FC = () => {
  return (
    <div className={s.root}>
      <div className={cn(s.label)}>
        Make with{' '}
        <span role="img" aria-label="love" aria-labelledby="">
          ❤️
        </span>
      </div>
      <a className={cn(s.link)} href="https://zarmarathon.com/">
        Ours Team
      </a>
    </div>
  );
};

export default Footer;

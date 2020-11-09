import React from 'react';
import cn from 'classnames';

import s from './Heading.module.scss';

interface IHeading {
  size: 1 | 2 | 3 | 4 | 5 | 6;
  withoutBold?: boolean;
}

const Heading: React.FC<IHeading> = ({ size, withoutBold = false, children }) => {
  const Tag = `h${size}`;

  return React.createElement(
    Tag,
    {
      className: cn({ [s.withoutBold]: withoutBold }),
    },
    children,
  );
};

export default Heading;

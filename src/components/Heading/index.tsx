import React from 'react';
import cn from 'classnames';

import s from './Heading.module.scss';

interface IHeading {
  size: 1 | 2 | 3 | 4 | 5 | 6;
  withoutBold?: boolean;
}

const Heading: React.FC<IHeading> = ({ size, withoutBold = false, children }) => {
  switch (size) {
    case 6:
      return <h6 className={cn({ [s.withoutBold]: withoutBold })}>{children}</h6>;
    case 5:
      return <h5 className={cn({ [s.withoutBold]: withoutBold })}>{children}</h5>;
    case 4:
      return <h4 className={cn({ [s.withoutBold]: withoutBold })}>{children}</h4>;
    case 3:
      return <h3 className={cn({ [s.withoutBold]: withoutBold })}>{children}</h3>;
    case 2:
      return <h2 className={cn({ [s.withoutBold]: withoutBold })}>{children}</h2>;
    default:
      return <h1 className={cn({ [s.withoutBold]: withoutBold })}>{children}</h1>;
  }
};

export default Heading;

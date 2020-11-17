import React, { ReactElement } from 'react';
import cn from 'classnames';

import Heading from '../Heading';

interface ILoadingBlock {
  isLoading: boolean;
  className?: string;
}

const LoadingBlock: React.FC<ILoadingBlock> = ({ isLoading, className = null, children }) => {
  return isLoading ? (
    <Heading size={3} className={cn(className)}>
      Loading...
    </Heading>
  ) : (
    (children as ReactElement)
  );
};

export default LoadingBlock;

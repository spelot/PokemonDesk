import React, { FC } from 'react';
import cn from 'classnames';

import s from './App.module.scss';

const App: FC = () => {
  return (
    <div className={cn(s.header, 'color')}>
      Yes, we did it! This is App Components!
    </div>
  )
}

export default App;
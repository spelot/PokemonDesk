import React, { FC } from 'react';
import cn from 'classnames';

import HomePage from './pages/Home';

import s from './App.module.scss';

const App: FC = () => {
  return (
    <div className={cn(s.App)}>
      <HomePage />
    </div>
  );
};

export default App;

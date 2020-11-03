import React, { FC } from 'react';
import cn from 'classnames';

import s from './App.module.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App: FC = () => {
  return (
    <div className={cn(s.App)}>
      <Header />
      <div className={cn(s.Content)}>Yes, we did it! This is App Component Content!</div>
      <Footer />
    </div>
  );
};

export default App;

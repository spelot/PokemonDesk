import React from 'react';
import { useRoutes } from 'hookrouter';
import cn from 'classnames';

import routes from './routes';
import NotFoundPage from './pages/NotFound';

import s from './App.module.scss';
import Header from './components/Header';

const App: React.FC = () => {
  const match = useRoutes(routes);

  return (
    <div className={cn(s.App)}>
      {match ? (
        <>
          <Header />
          {match}
        </>
      ) : (
        <NotFoundPage />
      )}
    </div>
  );
};

export default App;

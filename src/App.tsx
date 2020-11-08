import React, { FC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import cn from 'classnames';

import HomePage from './pages/Home';
import PokedexPage from './pages/Pokedex';

import s from './App.module.scss';

const App: FC = () => {
  return (
    <div className={cn(s.App)}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/pokedex" component={PokedexPage} />
          <Route exact path="/" component={HomePage} />
          <Route path="*" render={() => <h1>TODO: 404 page</h1>} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;

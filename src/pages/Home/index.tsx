import React from 'react';
import cn from 'classnames';
import { navigate } from 'hookrouter';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Button from '../../components/Button';
import Layout from '../../components/Layout';
import Parallax from '../../components/Parallax';
import Heading from '../../components/Heading';

import s from './Home.module.scss';

const HomePage: React.FC = () => {
  return (
    <div className={s.root}>
      <Header />
      <Layout>
        <div className={cn(s.content)}>
          <Heading size={1} withoutBold>
            <b>Find</b> all your favorite <b>Pokemon</b>
          </Heading>
          <Heading size={2} withoutBold>
            You can know the type of Pokemon, its strengths, disadvantages and abilities
          </Heading>
          <Button onClick={() => navigate('/pokedex')}>See pokemons</Button>
        </div>
        <div className={s.contentParallax}>
          <Parallax />
        </div>
      </Layout>
      <Footer />
    </div>
  );
};

export default HomePage;

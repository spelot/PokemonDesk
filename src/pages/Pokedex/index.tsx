import React from 'react';
import cn from 'classnames';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Layout from '../../components/Layout';

import s from './Pokedex.module.scss';

const PokedexPage: React.FC = () => {
  return (
    <div className={s.root}>
      <Header activeLink={1} />
      <Layout>
        <div className={cn(s.content)}>TODO: pokedex page content</div>
      </Layout>
      <Footer />
    </div>
  );
};

export default PokedexPage;

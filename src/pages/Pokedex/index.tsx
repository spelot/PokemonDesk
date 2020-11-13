/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import cn from 'classnames';

import Footer from '../../components/Footer';
import Layout from '../../components/Layout';
import PokemonCard from '../../components/PokemonCard';
import Heading from '../../components/Heading';

import s from './Pokedex.module.scss';

interface IStats {
  hp: number;
  attack: number;
  defense: number;
  'special-attack': number;
  'special-defense': number;
  speed: number;
}

interface IPokemon {
  name_clean: string;
  abilities: string[];
  stats: IStats;
  types: string[];
  img: string;
  name: string;
  base_experience: number;
  height: number;
  id: number;
  is_default: boolean;
  order: number;
  weight: number;
}

interface IData {
  total: number;
  pokemons: IPokemon[];
}

const usePokemons = () => {
  const [data, setData] = useState<IData>();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getPokemons = async () => {
      setIsLoading(true);

      try {
        const response = await fetch('http://zar.hosthot.ru/api/v1/pokemons?limit=9');
        const result = await response.json();
        setData(result);
        setIsError(false);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getPokemons();
  }, []);

  return {
    data,
    isLoading,
    isError,
  };
};

const PokedexPage: React.FC = () => {
  const { data, isLoading, isError } = usePokemons();

  if (isLoading) {
    return (
      <div className={s.root}>
        <Heading size={3} className={s.loader}>
          Loading...
        </Heading>
      </div>
    );
  }

  if (isError) {
    return (
      <div className={s.root}>
        <Heading size={3} className={s.loader}>
          Something wrong!
        </Heading>
      </div>
    );
  }

  return (
    <div className={s.root}>
      <Layout>
        <Heading size={1} withoutBold>
          {data!.total} <b>Pokemons</b> for you to choose your favorite
        </Heading>
        <div className={cn(s.content)}>
          {data!.pokemons.map((pokemonData) => (
            <PokemonCard
              name={pokemonData.name_clean}
              attack={pokemonData.stats.attack}
              defense={pokemonData.stats.defense}
              img={pokemonData.img}
              types={pokemonData.types}
              key={pokemonData.name_clean}
            />
          ))}
        </div>
      </Layout>
      <Footer />
    </div>
  );
};

export default PokedexPage;

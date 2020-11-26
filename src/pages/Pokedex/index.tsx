/* eslint-disable camelcase */
import React, { useState } from 'react';
import cn from 'classnames';
import querystring from 'querystring';

import Footer from '../../components/Footer';
import Layout from '../../components/Layout';
import PokemonCard from '../../components/PokemonCard';
import Heading from '../../components/Heading';
import useData from '../../hook/getData';
import { EnumEndpoint } from '../../config';
import LoadingBlock from '../../components/LoadingBlock';
import useDebounce from '../../hook/useDebounce';

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
  img: string | null;
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

const PokedexPage: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState<querystring.ParsedUrlQueryInput>({});
  const debouncedValue = useDebounce(searchValue, 500);

  const { data, isLoading, isError } = useData<IData>(EnumEndpoint.getPokemons, query, [debouncedValue]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setSearchValue(newValue);
    setQuery((state) => ({
      ...state,
      name: newValue,
    }));
  };

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
        <LoadingBlock isLoading={isLoading} className={s.loaderTextAboveInput}>
          <Heading size={1} withoutBold>
            {data?.total} <b>Pokemons</b> for you to choose your favorite
          </Heading>
        </LoadingBlock>
        <div>
          <input
            type="text"
            value={searchValue}
            onChange={handleSearchChange}
            className={s.searchInput}
            placeholder="Find your pokémon..."
          />
        </div>
        <LoadingBlock isLoading={isLoading} className={s.loaderCardsBelowInput}>
          <div className={cn(s.content)}>
            {data?.pokemons.map((pokemonData) => (
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
        </LoadingBlock>
      </Layout>
      <Footer />
    </div>
  );
};

export default PokedexPage;

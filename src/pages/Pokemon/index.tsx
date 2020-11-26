import React from 'react';

export interface IPokemonPage {
  id: string | number;
}

const PokemonPage: React.FC<IPokemonPage> = ({ id }) => {
  return <div>This is pokemon with id: {id}</div>;
};

export default PokemonPage;

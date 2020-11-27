import React from 'react';

import LoadingBlock from '../../components/LoadingBlock';
import { EnumEndpoint } from '../../config';
import useData from '../../hook/getData';

export interface IPokemonPage {
  id: string | number;
}

interface IPokemonRequest {
  name: string;
}

const PokemonPage: React.FC<IPokemonPage> = ({ id }) => {
  const { data, isLoading, isError } = useData<IPokemonRequest>(EnumEndpoint.getPokemon, { id });

  if (isError) {
    return <div>Something wrong... Go to home page</div>;
  }

  return (
    <LoadingBlock isLoading={isLoading}>
      <div>This is pokemon with name: {data?.name}</div>
    </LoadingBlock>
  );
};

export default PokemonPage;

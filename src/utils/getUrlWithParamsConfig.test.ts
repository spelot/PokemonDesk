import { EnumEndpoint } from '../config';
import getUrlWithParamsConfig from './getUrlWithParamsConfig';

describe('getUrlWithParamsConfig', () => {
  describe('Должна принимать два аргумента EnumEndpoint.getPokemons и', () => {
    test('пустой объект, на выходе получить объект с полями pathname, protocol, host и пустым query', () => {
      const url = getUrlWithParamsConfig(EnumEndpoint.getPokemons, {});

      expect(url).toEqual({
        protocol: 'http',
        host: 'zar.hosthot.ru',
        pathname: '/api/v1/pokemons',
        query: {},
      });
    });

    test('{ name: "Pikachu" }, на выходе получить объект с полями pathname, protocol, host и query с полями name равное "Pikachu"', () => {
      const url = getUrlWithParamsConfig(EnumEndpoint.getPokemons, { name: 'Pikachu' });

      expect(url).toEqual({
        protocol: 'http',
        host: 'zar.hosthot.ru',
        pathname: '/api/v1/pokemons',
        query: {
          name: 'Pikachu',
        },
      });
    });
  });

  describe('Должна принимать два аргумента EnumEndpoint.getPokemon и', () => {
    test('{ id: 25 }, на выходе получить объект с полями pathname, protocol, host и пустым query', () => {
      const url = getUrlWithParamsConfig(EnumEndpoint.getPokemon, { id: 25 });

      expect(url).toEqual({
        protocol: 'http',
        host: 'zar.hosthot.ru',
        pathname: '/api/v1/pokemon/25',
        query: {},
      });
    });

    test('{ id: "13" }, на выходе получить объект с полями pathname, protocol, host и пустым query', () => {
      const url = getUrlWithParamsConfig(EnumEndpoint.getPokemon, { id: '13' });

      expect(url).toEqual({
        protocol: 'http',
        host: 'zar.hosthot.ru',
        pathname: '/api/v1/pokemon/13',
        query: {},
      });
    });
  });
});

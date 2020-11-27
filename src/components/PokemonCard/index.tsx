import React from 'react';
import cn from 'classnames';
import Heading from '../Heading';
import toCapitalizeFirstLetter from '../../utils/toCapitalizeFirstLetter';

import s from './PokemonCard.module.scss';

import ImageNotFound from './assets/ImageNotFound.png';

interface IPokemonCard {
  name: string;
  attack: number;
  defense: number;
  types: string[];
  img: string | null;
}

const PokemonCard: React.FC<IPokemonCard> = ({ name, attack, defense, types, img }) => {
  return (
    <div className={s.root}>
      <div className={s.infoWrap}>
        <Heading size={3} className={s.titleName}>
          {toCapitalizeFirstLetter(name)}
        </Heading>
        <div className={s.statWrap}>
          <div className={s.statItem}>
            <div className={s.statValue}>{attack}</div>
            Attack
          </div>
          <div className={s.statItem}>
            <div className={s.statValue}>{defense}</div>
            Defense
          </div>
        </div>
        <div className={s.labelWrap}>
          {types.map((type) => (
            <span
              key={type}
              className={cn(s.label, {
                [s.typeBug]: type === 'bug',
                [s.typeDark]: type === 'dark',
                [s.typeDragon]: type === 'dragon',
                [s.typeElectric]: type === 'electric',
                [s.typeFairy]: type === 'fairy',
                [s.typeFighting]: type === 'fighting',
                [s.typeFire]: type === 'fire',
                [s.typeFlying]: type === 'flying',
                [s.typeGhost]: type === 'ghost',
                [s.typeGrass]: type === 'grass',
                [s.typeGround]: type === 'ground',
                [s.typeIce]: type === 'ice',
                [s.typeNormal]: type === 'normal',
                [s.typePoison]: type === 'poison',
                [s.typePsychic]: type === 'psychic',
                [s.typeRock]: type === 'rock',
                [s.typeSteel]: type === 'steel',
                [s.typeWater]: type === 'water',
              })}>
              {toCapitalizeFirstLetter(type)}
            </span>
          ))}
        </div>
      </div>
      <div
        className={cn(s.pictureWrap, {
          [s.typeBug]: types[0] === 'bug',
          [s.typeDark]: types[0] === 'dark',
          [s.typeDragon]: types[0] === 'dragon',
          [s.typeElectric]: types[0] === 'electric',
          [s.typeFairy]: types[0] === 'fairy',
          [s.typeFighting]: types[0] === 'fighting',
          [s.typeFire]: types[0] === 'fire',
          [s.typeFlying]: types[0] === 'flying',
          [s.typeGhost]: types[0] === 'ghost',
          [s.typeGrass]: types[0] === 'grass',
          [s.typeGround]: types[0] === 'ground',
          [s.typeIce]: types[0] === 'ice',
          [s.typeNormal]: types[0] === 'normal',
          [s.typePoison]: types[0] === 'poison',
          [s.typePsychic]: types[0] === 'psychic',
          [s.typeRock]: types[0] === 'rock',
          [s.typeSteel]: types[0] === 'steel',
          [s.typeWater]: types[0] === 'water',
        })}>
        {img ? (
          <img src={img} alt={toCapitalizeFirstLetter(name)} />
        ) : (
          <img src={ImageNotFound} className={s.notFound} alt={toCapitalizeFirstLetter(name)} />
        )}
      </div>
    </div>
  );
};

export default PokemonCard;

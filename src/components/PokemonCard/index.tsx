import React from 'react';
import cn from 'classnames';
import Heading from '../Heading';

import s from './PokemonCard.module.scss';

import ImageNotFound from './assets/ImageNotFound.png';

const capitalizeFirstLetter = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

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
          {capitalizeFirstLetter(name)}
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
                [s.typeFire]: type === 'fire',
                [s.typeWater]: type === 'water',
                [s.typeGrass]: type === 'grass',
                [s.typePoison]: type === 'poison',
                [s.typeFlying]: type === 'flying',
                [s.typeBug]: type === 'bug',
                [s.typeFairy]: type === 'fairy',
                [s.typeElectric]: type === 'electric',
              })}>
              {capitalizeFirstLetter(type)}
            </span>
          ))}
        </div>
      </div>
      <div
        className={cn(s.pictureWrap, {
          [s.typeFire]: types[0] === 'fire',
          [s.typeWater]: types[0] === 'water',
          [s.typeGrass]: types[0] === 'grass',
          [s.typePoison]: types[0] === 'poison',
          [s.typeFlying]: types[0] === 'flying',
          [s.typeBug]: types[0] === 'bug',
          [s.typeFairy]: types[0] === 'fairy',
          [s.typeElectric]: types[0] === 'electric',
        })}>
        {img ? (
          <img src={img} alt={capitalizeFirstLetter(name)} />
        ) : (
          <img src={ImageNotFound} className={s.notFound} alt={capitalizeFirstLetter(name)} />
        )}
      </div>
    </div>
  );
};

export default PokemonCard;

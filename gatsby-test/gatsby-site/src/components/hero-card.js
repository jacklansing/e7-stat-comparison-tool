import React from 'react';
import { css } from '@emotion/core';

const cardStyles = css`
  border: 1px solid black;
  padding: 1rem;
  margin-right: 0.5rem;
`;

const listStyles = css`
  list-style-type: none;
`;

const HeroCard = ({ hero }) => {
  const { name } = hero;
  const {
    atk,
    chc,
    chd,
    cp,
    dac,
    def,
    eff,
    efr,
    hp,
    spd,
  } = hero.stats.maxLevel;

  return (
    <div css={cardStyles}>
      <h1>{name}</h1>
      <h2>Base CP: {cp}</h2>
      <ul css={listStyles}>
        <li>Atttack: {atk}</li>
        <li>Health: {hp}</li>
        <li>Speed: {spd}</li>
        <li>Defense: {def}</li>
        <li>Crit Chance: {chc * 100}%</li>
        <li>Crit Dmg: {chd * 100}%</li>
        <li>Dual Attack: {dac * 100}%</li>
        <li>Effectiveness: {eff * 100}%</li>
        <li>Effect Resist: {efr * 100}%</li>
      </ul>
    </div>
  );
};

HeroCard.defaultProps = {
  hero: {
    name: '',
    stats: {
      maxLevel: {},
    },
  },
};

export default HeroCard;

import React from 'react';
import { css } from '@emotion/core';

const cardStyles = css`
  border: 1px solid black;
  border-radius: 5px;
  box-shadow: 1px 3px 3px lightgray;
  padding: 0.75rem;
  margin-bottom: 1rem;
  background: #443b9e;
  color: white;
`;

const listStyles = css`
  font-family: sans-serif;
  font-size: 1.25rem;
  list-style-type: none;
  > li > span {
    font-weight: 600;
  }
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
        <li>
          <span>Attack:</span> {atk}
        </li>
        <li>
          <span>Health:</span> {hp}
        </li>
        <li>
          <span>Speed:</span> {spd}
        </li>
        <li>
          <span>Defense: </span>
          {def}
        </li>
        <li>
          <span>Crit Chance:</span> {chc * 100}%
        </li>
        <li>
          <span>Crit Dmg:</span> {chd * 100}%
        </li>
        <li>
          <span>Dual Attack:</span> {dac * 100}%
        </li>
        <li>
          <span>Effectiveness:</span> {eff * 100}%
        </li>
        <li>
          <span>Effect Resist:</span> {efr * 100}%
        </li>
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

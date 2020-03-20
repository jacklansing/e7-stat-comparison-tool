import React from 'react';
import { css } from '@emotion/core';

const StatCompare = props => {
  let { heroOneStat } = props;
  let { heroTwoStat } = props;
  let isPercentage = false;

  //If stats are the same, none of the below logic is required.
  //We simply do not render the comparison.
  if (heroOneStat === heroTwoStat) return null;

  const statReference = {
    atk: 'base attack',
    chc: 'base crit chance',
    chd: 'base crit damage',
    cp: 'CP',
    dac: 'base dual attack chance',
    def: 'base defense',
    eff: 'base effectiveness',
    eft: 'base effect resistance',
    hp: 'base health',
    spd: 'base speed',
  };

  //If stat is less than one, we know its represented as a percentage in game
  //so we multiply it by 100 and add a percent sign

  if (heroOneStat < 1) {
    heroOneStat *= 100;
    heroTwoStat *= 100;
    isPercentage = true;
  }

  let difference;
  let winningHero;
  let statName;

  const setWinner = () => {
    if (heroOneStat > heroTwoStat) {
      difference = heroOneStat - heroTwoStat;
      winningHero = props.heroOneName;
    } else {
      difference = heroTwoStat - heroOneStat;
      winningHero = props.heroTwoName;
    }
    statName = statReference[props.statType];
  };

  setWinner();

  const stat = css`
    color: darkgreen;
    font-size: 1.5rem;
  `;

  return (
    <li>
      <span>{winningHero}</span> has{' '}
      <span css={stat}>
        {difference}
        {isPercentage ? '%' : null}
      </span>{' '}
      more {statName}
    </li>
  );
};

export default StatCompare;

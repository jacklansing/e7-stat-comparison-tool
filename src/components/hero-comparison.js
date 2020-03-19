import React from 'react';
import { css } from '@emotion/core';
import StatCompare from './stat-compare';

const HeroComparison = ({ heroOne, heroTwo }) => {
  /* Commented out stats that are always the same. For now they are
 left out as it seems redundant */

  const { name: nameHeroOne } = heroOne;
  const {
    atk: atkHeroOne,
    chc: chcHeroOne,
    chd: chdHeroOne,
    cp: cpHeroOne,
    // dac: dacHeroOne,
    def: defHeroOne,
    // eff: effHeroOne,
    // efr: efrHeroOne,
    hp: hpHeroOne,
    spd: spdHeroOne,
  } = heroOne.stats.maxLevel;

  const { name: nameHeroTwo } = heroTwo;
  const {
    atk: atkHeroTwo,
    chc: chcHeroTwo,
    chd: chdHeroTwo,
    cp: cpHeroTwo,
    // dac: dacHeroTwo,
    def: defHeroTwo,
    // eff: effHeroTwo,
    // efr: efrHeroTwo,
    hp: hpHeroTwo,
    spd: spdHeroTwo,
  } = heroTwo.stats.maxLevel;

  const comparisonListStyles = css`
    list-style-type: none;
    border: 1px solid black;
    border-radius: 5px;
    box-shadow: 1px 3px 3px lightgray;
    padding: 0.75rem;
    font-size: 1.25rem;
    font-family: sans-serif;
    margin: 0;
    margin-bottom: 2rem;

    @media screen and (min-width: 600px) {
      grid-column: 1 / -1;
      justify-self: center;
    }

    > li {
      margin-bottom: 1rem;
    }

    > li > span {
      font-weight: 600;
    }
  `;

  const stat = css`
    color: darkgreen;
    font-size: 1.5rem;
  `;

  const sameTypeError = css`
    grid-column: 1 / -1;
    font-size: 1.75rem;
    color: darkred;
    line-height: 1.2;
    text-align: center;
    font-family: sans-serif;
    padding: 1rem;
  `;

  return (
    <>
      {cpHeroOne === cpHeroTwo ? (
        <p css={sameTypeError}>
          Heroes are the same horoscope and class. Their stats are the same. Try
          a different combo!
        </p>
      ) : (
        <ul css={comparisonListStyles}>
          <StatCompare
            statType="spd"
            heroOneStat={spdHeroOne}
            heroTwoStat={spdHeroTwo}
            heroOneName={nameHeroOne}
            heroTwoName={nameHeroTwo}
          />
          <StatCompare
            statType="atk"
            heroOneStat={atkHeroOne}
            heroTwoStat={atkHeroTwo}
            heroOneName={nameHeroOne}
            heroTwoName={nameHeroTwo}
          />
          <StatCompare
            statType="chc"
            heroOneStat={chcHeroOne}
            heroTwoStat={chcHeroTwo}
            heroOneName={nameHeroOne}
            heroTwoName={nameHeroTwo}
          />
          <StatCompare
            statType="chd"
            heroOneStat={chdHeroOne}
            heroTwoStat={chdHeroTwo}
            heroOneName={nameHeroOne}
            heroTwoName={nameHeroTwo}
          />
          <StatCompare
            statType="hp"
            heroOneStat={hpHeroOne}
            heroTwoStat={hpHeroTwo}
            heroOneName={nameHeroOne}
            heroTwoName={nameHeroTwo}
          />
          <StatCompare
            statType="def"
            heroOneStat={defHeroOne}
            heroTwoStat={defHeroTwo}
            heroOneName={nameHeroOne}
            heroTwoName={nameHeroTwo}
          />
        </ul>
      )}
    </>
  );
};

export default HeroComparison;

import React from 'react';
import { css } from '@emotion/core';
import StatCompare from './stat-compare';

const HeroComparison = ({ heroOne, heroTwo }) => {
  const statReference = ['spd', 'atk', 'chc', 'chd', 'def', 'hp'];

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
      {heroOne.stats.maxLevel.cp === heroTwo.stats.maxLevel.cp ? (
        <p css={sameTypeError}>
          Heroes are the same horoscope and class. Their stats are the same. Try
          a different combo!
        </p>
      ) : (
        <ul css={comparisonListStyles}>
          {statReference.map(stat => {
            const heroOneStats = heroOne.stats.maxLevel;
            const heroTwoStats = heroTwo.stats.maxLevel;
            return (
              <StatCompare
                statType={stat}
                heroOneStat={heroOneStats[stat]}
                heroTwoStat={heroTwoStats[stat]}
                heroOneName={heroOne.name}
                heroTwoName={heroTwo.name}
              />
            );
          })}
        </ul>
      )}
    </>
  );
};

export default HeroComparison;

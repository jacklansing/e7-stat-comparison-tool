import React from 'react';
import { css } from '@emotion/core';

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

  return (
    <>
      {cpHeroOne === cpHeroTwo ? (
        <p>'Heroes are the same horoscope and class'</p>
      ) : (
        <ul css={comparisonListStyles}>
          {spdHeroOne > spdHeroTwo ? (
            <li>
              <span>{nameHeroOne}</span> has{' '}
              <span css={stat}>{spdHeroOne - spdHeroTwo}</span> more base speed
            </li>
          ) : (
            <li>
              <span>{nameHeroTwo}</span> has{' '}
              <span css={stat}>{spdHeroTwo - spdHeroOne}</span> more base speed
            </li>
          )}

          {atkHeroOne > atkHeroTwo ? (
            <li>
              <span>{nameHeroOne}</span> has{' '}
              <span css={stat}>{atkHeroOne - atkHeroTwo}</span> more base attack
            </li>
          ) : (
            <li>
              <span>{nameHeroTwo}</span> has{' '}
              <span css={stat}>{atkHeroTwo - atkHeroOne}</span> more base attack
            </li>
          )}

          {chcHeroOne > chcHeroTwo ? (
            <li>
              <span>{nameHeroOne}</span> has{' '}
              <span css={stat}>{chcHeroOne * 100 - chcHeroTwo * 100}%</span>{' '}
              more base crit rate
            </li>
          ) : (
            <li>
              <span>{nameHeroTwo}</span> has{' '}
              <span css={stat}>{chcHeroTwo * 100 - chcHeroOne * 100}%</span>{' '}
              more base crit rate
            </li>
          )}

          {chdHeroOne !== chdHeroTwo ? (
            <>
              {chdHeroOne > chdHeroTwo ? (
                <li>
                  <span>{nameHeroOne}</span> has{' '}
                  <span css={stat}>{chdHeroOne * 100 - chdHeroTwo * 100}%</span>{' '}
                  more base crit damage
                </li>
              ) : (
                <li>
                  <span>{nameHeroTwo}</span> has{' '}
                  <span css={stat}>{chdHeroTwo * 100 - chdHeroOne * 100}%</span>{' '}
                  more base crit damage
                </li>
              )}
            </>
          ) : null}

          {hpHeroOne > hpHeroTwo ? (
            <li>
              <span>{nameHeroOne}</span> has{' '}
              <span css={stat}>{hpHeroOne - hpHeroTwo}</span> more base health
            </li>
          ) : (
            <li>
              <span>{nameHeroTwo}</span> has{' '}
              <span css={stat}>{hpHeroTwo - hpHeroOne}</span> more base health
            </li>
          )}

          {defHeroOne > defHeroTwo ? (
            <li>
              <span>{nameHeroOne}</span> has{' '}
              <span css={stat}>{defHeroOne - defHeroTwo}</span> more base
              defense
            </li>
          ) : (
            <li>
              <span>{nameHeroTwo}</span> has{' '}
              <span css={stat}>{defHeroTwo - defHeroOne}</span> more base
              defense
            </li>
          )}
        </ul>
      )}
    </>
  );
};

export default HeroComparison;

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

    > li > span {
      font-weight: 600;
    }
  `;

  return (
    <>
      {cpHeroOne === cpHeroTwo ? (
        <p>'Heroes are the same horoscope and class'</p>
      ) : (
        <ul css={comparisonListStyles}>
          {spdHeroOne > spdHeroTwo ? (
            <li>
              <span>{nameHeroOne}</span> has {spdHeroOne - spdHeroTwo} more base
              speed
            </li>
          ) : (
            <li>
              <span>{nameHeroTwo}</span> has {spdHeroTwo - spdHeroOne} more base
              speed
            </li>
          )}

          {atkHeroOne > atkHeroTwo ? (
            <li>
              <span>{nameHeroOne}</span> has {atkHeroOne - atkHeroTwo} more base
              attack
            </li>
          ) : (
            <li>
              <span>{nameHeroTwo}</span> has {atkHeroTwo - atkHeroOne} more base
              attack
            </li>
          )}

          {chcHeroOne > chcHeroTwo ? (
            <li>
              <span>{nameHeroOne}</span> has{' '}
              {chcHeroOne * 100 - chcHeroTwo * 100}% more base crit rate
            </li>
          ) : (
            <li>
              <span>{nameHeroTwo}</span> has{' '}
              {chcHeroTwo * 100 - chcHeroOne * 100}% more base crit rate
            </li>
          )}

          {chdHeroOne !== chdHeroTwo ? (
            <>
              {chdHeroOne > chdHeroTwo ? (
                <li>
                  <span>{nameHeroOne}</span> has{' '}
                  {chdHeroOne * 100 - chdHeroTwo * 100}% more base crit damage
                </li>
              ) : (
                <li>
                  <span>{nameHeroTwo}</span> has{' '}
                  {chdHeroTwo * 100 - chdHeroOne * 100}% more base crit damage
                </li>
              )}
            </>
          ) : null}

          {hpHeroOne > hpHeroTwo ? (
            <li>
              <span>{nameHeroOne}</span> has {hpHeroOne - hpHeroTwo} more base
              health
            </li>
          ) : (
            <li>
              <span>{nameHeroTwo}</span> has {hpHeroTwo - hpHeroOne} more base
              health
            </li>
          )}

          {defHeroOne > defHeroTwo ? (
            <li>
              <span>{nameHeroOne}</span> has {defHeroOne - defHeroTwo} more base
              defense
            </li>
          ) : (
            <li>
              <span>{nameHeroTwo}</span> has {defHeroTwo - defHeroOne} more base
              defense
            </li>
          )}
        </ul>
      )}
    </>
  );
};

export default HeroComparison;

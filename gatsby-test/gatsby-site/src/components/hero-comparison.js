import React, { useState } from 'react';

const HeroComparison = ({ heroOne, heroTwo }) => {
  const { name: nameHeroOne } = heroOne;
  const {
    atk: atkHeroOne,
    chc: chcHeroOne,
    chd: chdHeroOne,
    cp: cpHeroOne,
    dac: dacHeroOne,
    def: defHeroOne,
    eff: effHeroOne,
    efr: efrHeroOne,
    hp: hpHeroOne,
    spd: spdHeroOne,
  } = heroOne.stats.maxLevel;

  const { name: nameHeroTwo } = heroTwo;
  const {
    atk: atkHeroTwo,
    chc: chcHeroTwo,
    chd: chdHeroTwo,
    cp: cpHeroTwo,
    dac: dacHeroTwo,
    def: defHeroTwo,
    eff: effHeroTwo,
    efr: efrHeroTwo,
    hp: hpHeroTwo,
    spd: spdHeroTwo,
  } = heroTwo.stats.maxLevel;

  return (
    <div>
      {cpHeroOne === cpHeroTwo
        ? 'Heroes are the same horoscope and class'
        : null}
      <p>
        {spdHeroOne > spdHeroTwo
          ? `${nameHeroOne} has ${spdHeroOne - spdHeroTwo} more base speed.`
          : `${nameHeroTwo} has ${spdHeroTwo - spdHeroOne} more base speed.`}
      </p>
    </div>
  );
};

export default HeroComparison;

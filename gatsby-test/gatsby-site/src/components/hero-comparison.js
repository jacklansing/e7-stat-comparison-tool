import React, { useState } from 'react';

const HeroComparison = ({ heroOne, heroTwo }) => {
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

  return (
    <div>
      {cpHeroOne === cpHeroTwo ? (
        'Heroes are the same horoscope and class'
      ) : (
        <>
          <p>
            {spdHeroOne > spdHeroTwo
              ? `${nameHeroOne} has ${spdHeroOne - spdHeroTwo} more base speed.`
              : `${nameHeroTwo} has ${spdHeroTwo -
                  spdHeroOne} more base speed.`}
          </p>
          <p>
            {atkHeroOne > atkHeroTwo
              ? `${nameHeroOne} has ${atkHeroOne -
                  atkHeroTwo} more base attack.`
              : `${nameHeroTwo} has ${atkHeroTwo -
                  atkHeroOne} more base attack.`}
          </p>
          <p>
            {chcHeroOne > chcHeroTwo
              ? `${nameHeroOne} has ${chcHeroOne * 100 -
                  chcHeroTwo * 100}% more base crit rate.`
              : `${nameHeroTwo} has ${chcHeroTwo * 100 -
                  chcHeroOne * 100}% more base crit rate.`}
          </p>
          <p>
            {chdHeroOne !== chdHeroTwo
              ? chdHeroOne > chdHeroTwo
                ? `${nameHeroOne} has ${chdHeroOne * 100 -
                    chdHeroTwo * 100}% more base crit damage.`
                : `${nameHeroTwo} has ${chdHeroTwo * 100 -
                    chdHeroOne * 100}% more base crit damage.`
              : null}
          </p>
          <p>
            {hpHeroOne > hpHeroTwo
              ? `${nameHeroOne} has ${hpHeroOne - hpHeroTwo} more base health.`
              : `${nameHeroTwo} has ${hpHeroTwo - hpHeroOne} more base health.`}
          </p>
          <p>
            {defHeroOne > defHeroTwo
              ? `${nameHeroOne} has ${defHeroOne -
                  defHeroTwo} more base defense.`
              : `${nameHeroTwo} has ${defHeroTwo -
                  defHeroOne} more base defense.`}
          </p>
        </>
      )}
    </div>
  );
};

export default HeroComparison;

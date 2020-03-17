import React from 'react';

const HeroComparison = ({ heroOne, heroTwo }) => {
  const { name_H1 } = heroOne;
  const {
    atk_H1,
    chc_H1,
    chd_H1,
    cp_H1,
    dac_H1,
    def_H1,
    eff_H1,
    efr_H1,
    hp_H1,
    spd_H1,
  } = heroOne.stats.maxLevel;

  const { name_H2 } = heroTwo;
  const {
    atk_H2,
    chc_H2,
    chd_H2,
    cp_H2,
    dac_H2,
    def_H2,
    eff_H2,
    efr_H2,
    hp_H2,
    spd_H2,
  } = heroTwo.stats.maxLevel;

  return (
    <div>
      {cp_H1 === cp_H2 ? 'Heroes are the same horoscope and class' : null}
    </div>
  );
};

export default HeroComparison;

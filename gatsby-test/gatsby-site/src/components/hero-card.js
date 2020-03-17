import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
const HeroCard = () => {
  const data = useStaticQuery(graphql`
    query {
      heroesWithStatsJson(name: { eq: "Cermia" }) {
        stats {
          lv60SixStarFullyAwakened {
            atk
            chc
            chd
            cp
            dac
            def
            eff
            efr
            hp
            spd
          }
        }
        name
      }
    }
  `);

  const { name } = data.heroesWithStatsJson;
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
  } = data.heroesWithStatsJson.stats.lv60SixStarFullyAwakened;

  return (
    <div>
      <h1>{name}</h1>
      <h2>Base CP: {cp}</h2>
      <ul>
        <li>Atttack: {atk}</li>
        <li>Health: {hp}</li>
        <li>Speed: {spd}</li>
        <li>Defense: {def}</li>
        <li>Crit Chance: {chc * 100}%</li>
        <li>Crit Dmg: {chd * 100}%</li>
        <li>Dual Attack: {dac * 100}%</li>
        <li>Effectiveness: {eff * 100}%</li>
        <li>Effect Resis: {efr * 100}%</li>
      </ul>
    </div>
  );
};

export default HeroCard;

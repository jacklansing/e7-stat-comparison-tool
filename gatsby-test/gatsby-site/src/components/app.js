import React, { useState } from 'react';
import useHeroData from '../hooks/use-hero-data';
import HeroSelectForm from './hero-select-form';
import HeroCard from './hero-card';
import HeroComparison from './hero-comparison';
import './app.css';

const App = () => {
  const [heroOne, setHeroOne] = useState({});
  const [heroTwo, setHeroTwo] = useState({});
  const heroData = useHeroData();

  const getHeroOne = heroName => {
    setHeroOne(heroData.allHeroes.heroes.find(hero => hero.name === heroName));
  };

  const getHeroTwo = heroName => {
    setHeroTwo(heroData.allHeroes.heroes.find(hero => hero.name === heroName));
  };

  return (
    <section className="App">
      <HeroSelectForm
        className="form1"
        heroes={heroData.allHeroes.heroes.map(hero => hero.name)}
        onSetHero={getHeroOne}
      />
      <HeroSelectForm
        className="form2"
        heroes={heroData.allHeroes.heroes.map(hero => hero.name)}
        onSetHero={getHeroTwo}
      />
      {Object.keys(heroOne).length > 0 && <HeroCard hero={heroOne} />}
      {Object.keys(heroTwo).length > 0 && <HeroCard hero={heroTwo} />}
      {Object.keys(heroOne).length > 0 && Object.keys(heroTwo).length > 0 && (
        <HeroComparison heroOne={heroOne} heroTwo={heroTwo} />
      )}
    </section>
  );
};

export default App;

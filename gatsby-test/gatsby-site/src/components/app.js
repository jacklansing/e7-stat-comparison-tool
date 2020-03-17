import React, { useState } from 'react';
import useHeroData from '../hooks/use-hero-data';
import HeroSelectForm from './hero-select-form';
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
    </section>
  );
};

export default App;

import React, { useState } from 'react';

const HeroSelectForm = ({ heroes, onSetHero, className }) => {
  const [name, setName] = useState('');
  const [selected, setSelected] = useState('');
  onSetHero(selected);

  return (
    <form className={className} onSubmit={e => e.preventDefault()}>
      <label htmlFor="name">Hero Name: </label>
      <input
        type="text"
        id="name"
        name="name"
        onChange={e => setName(e.target.value)}
      />
      {name &&
        heroes
          .filter(hero => hero.includes(name))
          .map(hero => (
            <div key={hero}>
              <label>
                <input
                  type="radio"
                  name="selected-hero"
                  value={hero}
                  onChange={e => setSelected(e.target.value)}
                />
                {hero}
              </label>
            </div>
          ))}
    </form>
  );
};

export default HeroSelectForm;

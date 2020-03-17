import React, { useState } from 'react';
import FormValidationError from './form-validation-error';

const HeroSelectForm = ({ heroes, onSetHero, className }) => {
  const [name, setName] = useState('');
  const [selected, setSelected] = useState('');

  if (selected) {
    onSetHero(selected);
  }

  return (
    <form className={className} onSubmit={e => e.preventDefault()}>
      <label htmlFor={className + '-name'}>Hero Name: </label>
      <input
        type="text"
        id={className + '-name'}
        name={className + '-name'}
        onChange={e => setName(e.target.value)}
      />
      {name.length > 1 ? null : (
        <FormValidationError message={'Start typing name (at least 2 chars)'} />
      )}
      {name.length > 1 &&
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

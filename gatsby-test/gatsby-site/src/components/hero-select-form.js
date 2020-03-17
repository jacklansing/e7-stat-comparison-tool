import React, { useState } from 'react';
import FormValidationError from './form-validation-error';
import { css } from '@emotion/core';

const HeroSelectForm = ({ heroes, onSetHero, className }) => {
  const [name, setName] = useState('');
  const [selected, setSelected] = useState('');

  if (selected) {
    onSetHero(selected);
  }

  const radioStyles = css`
    appearance: none;
  `;

  const selectedRadioStyle = css`
    background-color: darkblue;
    color: white;
  `;

  const radioLabelStyles = css`
    border: 1px solid black;
    border-radius: 5px;
    box-shadow: 1px 3px 1px lightgrey;
    display: block;
    margin-top: 1rem;
    max-width: 50vw;
    padding: 1rem;
  `;

  const textLabelStyles = css`
    margin-right: 0.45rem;
    display: block;
  `;

  const textInputStyles = css`
    padding: 0.45rem;
    border: 1px solid gray;
    box-shadow: 1px 3px 3px lightgrey;
    border-radius: 5px;
  `;

  const formStyles = css`
    font-family: sans-serif;
  `;

  return (
    <form
      css={formStyles}
      className={className}
      onSubmit={e => e.preventDefault()}
    >
      <label css={textLabelStyles} htmlFor={className + '-name'}>
        Hero Name:{' '}
      </label>
      <input
        css={textInputStyles}
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
          .filter(hero => hero.toLowerCase().includes(name.toLowerCase()))
          .map(hero => (
            <label
              key={hero}
              css={css`
                ${radioLabelStyles};
                ${hero === selected ? selectedRadioStyle : ''};
              `}
            >
              <input
                css={radioStyles}
                type="radio"
                name="selected-hero"
                value={hero}
                onChange={e => setSelected(e.target.value)}
              />
              {hero}
            </label>
          ))}
    </form>
  );
};

export default HeroSelectForm;

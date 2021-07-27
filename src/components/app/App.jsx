import React from 'react';
import Character from '../characters/Character';

export default function App() {
  return (
    <Character
      name="Rick Sanchez"
      species="Human"
      status="Alive"
      // eslint-disable-next-line max-len
      image="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
    />
  );
}

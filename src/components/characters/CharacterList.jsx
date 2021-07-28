import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';

const CharacterList = ({ characters }) => {
  const characterElement = characters.map((character) => (
    <li key={character.id}>
      <Character
        name={character.name}
        species={character.species}
        status={character.status}
        image={character.image}
      />
    </li>
  ));


  return (
    <ul>
      {characterElement}
    </ul>
  );
};

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  })).isRequired
};

export default CharacterList;

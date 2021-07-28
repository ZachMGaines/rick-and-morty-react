import React, { Component } from 'react';
import { fetchCharacters } from '../components/services/rickAndMortyApi';
import CharacterList from '../components/characters/CharacterList';




export default class RickandMortyCharacters extends Component {
  state = {
    characters: [],
    loading: true
  }
  async componentDidMount() {
    const characters = await fetchCharacters();
    console.log(characters);
    this.setState({ characters, loading: false });
  }

  render() {
    const { characters, loading } = this.state;

    // eslint-disable-next-line keyword-spacing
    if (loading) return <h1>Loading...</h1>;
    return <CharacterList characters={characters} />;
  }
}

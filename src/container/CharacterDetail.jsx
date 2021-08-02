/* eslint-disable max-len */
import React, { Component } from 'react';
import { fetchDetail } from '../components/services/DetailAPI';
import CharDetail from '../components/characters/CharDetail';
import PropTypes from 'prop-types';

export default class CharacterDetail extends Component {
  state = {
    details: {},
    loading: true,
  }

  async componentDidMount() {
    const { match } = this.props;

    const details = await fetchDetail(match.params.id);
    console.log(details);
    this.setState({ details, loading: false });
  }

  render() {
    const { details, loading } = this.state;

    // eslint-disable-next-line keyword-spacing
    if (loading) return <h1>Loading...</h1>;
    return <CharDetail name={details.name} species={details.species} status={details.status} image={details.image} />;
  }
}

CharacterDetail.propTypes = {
  match: PropTypes.object.isRequired
};

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Container } from './styles';

export class Header extends Component {
  render() {
    const { avatar, playerName, score } = this.props;
    return (
      <Container>
        <img
          src={ avatar }
          alt="Player Avatar"
          data-testid="header-profile-picture"
        />
        <p data-testid="header-player-name">
          { playerName }
        </p>
        <p data-testid="header-score">
          { score }
        </p>
      </Container>
    );
  }
}

Header.propTypes = {
  avatar: PropTypes.string,
  playerName: PropTypes.string,
  score: PropTypes.number,
}.isRequired;

export default index;

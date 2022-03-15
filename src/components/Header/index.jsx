import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import getGravatar from '../../utils/getGravatar';

import { Container } from './styles';

class Header extends Component {
  render() {
    const { name, score, gravatarEmail } = this.props;
    return (
      <Container>
        <img
          src={ getGravatar(gravatarEmail) }
          alt="Player Avatar"
          data-testid="header-profile-picture"
        />
        <div>
          <p>
            Player:
            <span data-testid="header-player-name">
              { name }
            </span>
          </p>
          <p>
            Score:
            <span data-testid="header-score">
              { score }
            </span>
          </p>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = ({ player: { gravatarEmail, name, score, assertions } }) => ({
  gravatarEmail,
  name,
  score,
  assertions,
});

Header.propTypes = {
  getGravatar: PropTypes.func,
  avatar: PropTypes.string,
  playerName: PropTypes.string,
  score: PropTypes.number,
}.isRequired;

export default connect(mapStateToProps, null)(Header);

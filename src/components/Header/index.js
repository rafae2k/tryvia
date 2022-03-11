import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import fetchGravatar from '../../services/fetchGravatar.service';

import { Container } from './styles';

class Header extends Component {
  state = {
    gravatarImage: '',
  }

  async componentDidMount() {
    const { name, gravatarEmail, score } = this.props;
    const gravatar = await fetchGravatar(gravatarEmail);
    this.setState(
      (prevState) => (
        { ...prevState, name, gravatarEmail, score, gravatarImage: gravatar }
      ),
    );
  }

  render() {
    const { name, score, gravatarImage } = this.state;
    return (
      <Container>
        <img
          src={ gravatarImage }
          alt="Player Avatar"
          data-testid="header-profile-picture"
        />
        <p data-testid="header-player-name">
          { name }
        </p>
        <p data-testid="header-score">
          { score }
        </p>
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

const mapDispatchToProps = (dispatch) => ({
  getGravatar: (gravatarEmail) => dispatch(fetchGravatar(gravatarEmail)),
});

Header.propTypes = {
  getGravatar: PropTypes.func,
  avatar: PropTypes.string,
  playerName: PropTypes.string,
  score: PropTypes.number,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Header);

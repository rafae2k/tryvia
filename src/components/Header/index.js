import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGravatar } from '../../redux/actions/playerActions';
import { Container } from './styles';

class Header extends Component {
  componentDidMount() {
    console.log(this.props);
    const { getGravatar } = this.props;
    console.log(getGravatar());
  }

  render() {
    const { playerName, score, getGravatar } = this.props;
    return (
      <Container>
        <img
          src=''
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

const mapDispatchToProps = (dispatch) => ({
  getGravatar: (gravatarEmail) => dispatch(fetchGravatar(gravatarEmail)),
});

Header.propTypes = {
  getGravatar: PropTypes.func,
  avatar: PropTypes.string,
  playerName: PropTypes.string,
  score: PropTypes.number,
}.isRequired;

export default connect(null, mapDispatchToProps)(Header);

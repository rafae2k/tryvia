import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';

// Services/utils
import Switch from 'react-switch';
import getGravatar from '../../utils/getGravatar';

// Components

// Styles
import { Container } from './styles';
import { checkedIcon, uncheckedIcon } from '../Icons';

class Header extends Component {
  state= {
    checkedIcon: false,
  }

  render() {
    const { name, score, gravatarEmail } = this.props;
    const { checkedIcon } = this.state;
    return (
      <Container>
        <img src="../assets/images/tryvia-full-logo.png" alt="tryvia logo" />
        <nav>
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
          <img
            src={ getGravatar(gravatarEmail) }
            alt="Player Avatar"
            data-testid="header-profile-picture"
          />
        </nav>
        <Switch
          onHandleColor="#452D71"
          onColor="#7B61FF"
          offColor="#452D71"
          offHandleColor="#7B61FF"
          height={ 42 }
          width={ 80 }
          uncheckedIcon={ uncheckedIcon }
          checkedIcon={ checkedIcon }
          className="switch"
        />
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

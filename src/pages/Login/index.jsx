import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPlayer } from '../../redux/actions/playerActions';
import { setTriviaToken } from '../../redux/actions/tokenActions';
import { saveTokenOnLocalStorage } from '../../services/localStorage.service';
import fetchTriviaToken from '../../utils/fetchTriviaToken';

class Login extends Component {
  state ={
    name: '',
    email: '',
    isDisabled: true,
  }

  validateForm = () => {
    const { email, name } = this.state;

    const regexEmail = new RegExp(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/);
    const isEmailValid = regexEmail.test(String(email).toLowerCase());

    if (isEmailValid && name.length > 0) {
      this.setState({ isDisabled: false });
    } else {
      this.setState({ isDisabled: true });
    }
  }

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value }, this.validateForm);
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { createUserDispatch, history, triviaTokenDispatch } = this.props;
    const { email, name } = this.state;

    await createUserDispatch({ gravatarEmail: email, name });

    const token = await fetchTriviaToken();
    await saveTokenOnLocalStorage(token);
    triviaTokenDispatch(token);

    history.push('/game');
  }

  render() {
    const { name, email, isDisabled } = this.state;
    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
          <input
            data-testid="input-player-name"
            placeholder="Nome"
            name="name"
            onChange={ this.handleChange }
            value={ name }
          />
          <input
            data-testid="input-gravatar-email"
            type="email"
            name="email"
            placeholder="Email"
            onChange={ this.handleChange }
            value={ email }
          />
          <button
            data-testid="btn-play"
            type="submit"
            disabled={ isDisabled }
          >
            Play
          </button>
        </form>
      </div>

    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  createUserDispatch: (user) => dispatch(addPlayer(user)),
  triviaTokenDispatch: (token) => dispatch(setTriviaToken(token)),
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  createUserDispatch: PropTypes.func,
}.isRequired;

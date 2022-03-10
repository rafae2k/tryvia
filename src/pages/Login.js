import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPlayer } from '../redux/actions/playerActions';
import { fetchToken } from '../redux/actions/tokenActions';

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
    const { createUser, history, getToken } = this.props;
    const { email, name } = this.state;

    await createUser({ gravatarEmail: email, name });
    await getToken();

    history.push('/game');
  }

  render() {
    const { name, email, isDisabled } = this.state;
    const { history } = this.props;

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
          <button
            data-testid="btn-settings"
            type="button"
            onClick={ () => history.push('/configurations') }
          >
            Configurations
          </button>
        </form>
      </div>

    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  createUser: (user) => dispatch(addPlayer(user)),
  getToken: () => dispatch(fetchToken()),
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  createUserDispatch: PropTypes.func,
}.isRequired;

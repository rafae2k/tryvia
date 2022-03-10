import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPlayer } from '../redux/actions/playerActions';

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

  handleSubmit = () => {
    const { createUserDispatch } = this.props;
    const { email, name } = this.state;

    createUserDispatch({ email, name });
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
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  createUserDispatch: PropTypes.func,
}.isRequired;

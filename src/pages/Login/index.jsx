import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';
import { addPlayer } from '../../redux/actions/playerActions';
import { setTriviaToken } from '../../redux/actions/tokenActions';

// Services / Utils
import fetchTriviaToken from '../../utils/fetchTriviaToken';
import { saveTokenOnLocalStorage } from '../../services/localStorage.service';

// Components
import Logo from '../../components/Logo';
import Input from '../../components/Input';
import Button from '../../components/Button';

// Styles
import { Container, LogoWrapper, FormWrapper } from './styles';

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
    const { history } = this.props;

    return (
      <Container>

        <LogoWrapper>
          <Logo />
        </LogoWrapper>

        <img src="../assets/images/question-markpng.png" alt="" />

        <FormWrapper>
          <div className="form-border">
            <form onSubmit={ this.handleSubmit } className="form-content">
              <h1>
                Let&apos;s Play !
                <span>{' '}🤩</span>
              </h1>
              <Input
                data-testid="input-player-name"
                name="name"
                id="name"
                onChange={ this.handleChange }
                value={ name }
              />
              <Input
                data-testid="input-player-name"
                name="email"
                id="email"
                onChange={ this.handleChange }
                value={ email }
              />
              <Button
                dataTestId="btn-play"
                type="submit"
                disabled={ isDisabled }
              >
                Play
              </Button>
            </form>
          </div>
        </FormWrapper>
      </Container>

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

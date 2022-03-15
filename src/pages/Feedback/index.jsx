// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Header } from '../../components/Header';

export class Feedback extends Component {
  render() {
    return (
      <>
        <Header />
        <h1 data-testid="feedback-text">Olá</h1>
      </>
    );
  }
}

Feedback.propTypes = {};

export default Feedback;

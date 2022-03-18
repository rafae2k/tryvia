import PropTypes from 'prop-types';
import React, { Component } from 'react';

// Redux
import { connect } from 'react-redux';
import { setScore } from '../../redux/actions/playerActions';

// Styles
import Header from '../../components/Header';

class Feedback extends Component {
  handleClickPlayAgain = (e) => {
    const { history, setUserScore } = this.props;
    e.preventDefault();

    setUserScore({
      assertions: 0,
      score: 0,
    });

    return history.push('/');
  }

  handleClickRanking = (e) => {
    const { history } = this.props;
    e.preventDefault();
    return history.push('/ranking');
  }

  render() {
    const MIN_ASSERTIONS = 3;
    const { score, assertions } = this.props;
    return (
      <>
        <Header />
        { (assertions < MIN_ASSERTIONS)
          ? <h1 data-testid="feedback-text">Could be better...</h1>
          : <h1 data-testid="feedback-text">Well Done!</h1>}
        <h2 data-testid="feedback-total-question">
          {`Você acertou ${assertions} questões!`}
        </h2>
        <h2 data-testid="feedback-total-score">
          {`Um total de ${score} pontos`}
        </h2>
        <button
          data-testid="btn-play-again"
          type="button"
          onClick={ this.handleClickPlayAgain }
        >
          Play Again
        </button>
        <button
          data-testid="btn-ranking"
          type="button"
          onClick={ this.handleClickRanking }
        >
          Ranking
        </button>
      </>
    );
  }
}

const mapStateToProps = ({ player: { score, assertions } }) => ({
  score,
  assertions,
});

const mapDispatchToProps = (dispatch) => ({
  setUserScore: (score) => dispatch(setScore(score)),
});

Feedback.propTypes = {
  score: PropTypes.number,
  assertions: PropTypes.number,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);

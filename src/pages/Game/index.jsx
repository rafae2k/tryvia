import PropTypes from 'prop-types';
import React, { Component } from 'react';

// Redux
import { connect } from 'react-redux';
import { fetchQuestions } from '../../redux/actions/triviaApi';
import { setScore } from '../../redux/actions/playerActions';

// Components
import Header from '../../components/Header';
import QuestionCard from '../../components/QuestionCard';

class Game extends Component {
  state = {
    questionNumber: 0,
    isAnswersDisabled: false,
    showNextQuestion: false,
    userAnswer: undefined,
    userClicked: false,
  }

  componentDidMount() {
    const { getQuestions } = this.props;
    getQuestions();
  }

  handleUserAnswer = (e) => {
    const { questions, setUserScore, player } = this.props;
    const { questionNumber, userClicked } = this.state;

    // get user answer
    const userAnswer = e.currentTarget.value;

    // get correct userAnswer from redux state
    const correctAnswer = questions[questionNumber].correct_answer;

    if (userAnswer === correctAnswer) {
      this.setState({ userAnswer, userClicked: true });
      setUserScore(player.score + 1);
    }

    this.setState({
      isAnswersDisabled: true,
      showNextQuestion: true,
      userClicked: true,
    });
  }

  handleNextQuestion = () => {
    const { questions, history } = this.props;
    const { questionNumber } = this.state;

    if (questionNumber === questions.length - 1) return history.push('/feedback'); // Verify if it's the last Question

    this.setState((prevState) => ({
      questionNumber: prevState.questionNumber + 1,
      isAnswersDisabled: false,
      userClicked: false,
    }));
  };

  render() {
    const { questions } = this.props;
    const {
      questionNumber,
      isAnswersDisabled,
      showNextQuestion,
      userAnswer,
      userClicked,
    } = this.state;

    return (
      <>
        <Header />

        { questions.length > 0
        && <QuestionCard
          question={ questions[questionNumber] }
          handleUserAnswer={ this.handleUserAnswer }
          isAnswersDisabled={ isAnswersDisabled }
          userAnswer={ userAnswer }
          userClicked={ userClicked }
        />}
        {showNextQuestion
          && (
            <button
              type="button"
              data-testid="btn-next"
              onClick={ this.handleNextQuestion }
            >
              Next
            </button>
          )}
      </>
    );
  }
}

const mapStateToProps = ({ questions, player }) => ({
  questions,
  player,
});

const mapDispatchToProps = (dispatch) => ({
  getQuestions: () => dispatch(fetchQuestions()),
  setUserScore: (score) => dispatch(setScore(score)),
});

Game.propTypes = {
  questions: PropTypes.shape({
    category: PropTypes.string,
    type: PropTypes.string,
    question: PropTypes.string,
    correct_answer: PropTypes.string,
    incorrect_answers: PropTypes.string,
  }),
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Game);

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import QuestionCard from '../../components/QuestionCard';
import { fetchQuestions } from '../../redux/actions/triviaApi';

class Game extends Component {
  state = {
    questionsIndex: 0,
  }

  componentDidMount() {
    const { getQuestions } = this.props;
    getQuestions();
  }

  handleClickNextQuestion = () => {
    const { questions, history } = this.props;
    const { questionsIndex } = this.state;
    if (questionsIndex === questions.length - 1) return history.push('/feedback');
    this.setState((state) => ({ questionsIndex: state.questionsIndex + 1 }));
  };

  render() {
    const { questions } = this.props;
    const { questionsIndex } = this.state;
    return (
      <>
        <Header />
        { questions.length > 0
        && <QuestionCard
          questionsIndex={ questionsIndex }
          questions={ questions }
          handleClickNextQuestion={ this.handleClickNextQuestion }
        />}
      </>
    );
  }
}

const mapStateToProps = ({ questions }) => ({
  questions,
});

const mapDispatchToProps = (dispatch) => ({
  getQuestions: () => dispatch(fetchQuestions()),
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

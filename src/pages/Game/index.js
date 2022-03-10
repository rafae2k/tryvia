import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import { fetchQuestions } from '../../redux/actions/triviaApi';

class Game extends Component {
  componentDidMount() {
    const { getQuestions } = this.props;
    getQuestions();
  }

  render() {
    const { questions } = this.props;
    return (
      <>
        <Header />
        <div>
          <h2
            data-testid="question-category"
          >
            {/* { category } */}
          </h2>
          <h3 data-testid="question-text">
            {/* {questions.question} */}
          </h3>

        </div>
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

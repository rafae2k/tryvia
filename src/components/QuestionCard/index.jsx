import PropTypes from 'prop-types';
import React, { Component } from 'react';
import decodeHtml from '../../utils/decodeHtml';
import shuffleQuestions from '../../utils/shuffleQuestions';

class QuestionCard extends Component {
  render() {
    const { questions, questionsIndex } = this.props;
    const {
      category,
      correct_answer: correctAnswer,
      incorrect_answers: incorrectAnswers,
      difficulty,
      question,
      type,
    } = questions[questionsIndex];
    return (
      <div>
        <h2 data-testid="question-category">
          { category }
        </h2>
        <h3 data-testid="question-text">
          { question }
        </h3>
        { (type === 'boolean')
        && (
          <>
            <button
              type="button"
              data-testid="correct-answer"
            >
              { correctAnswer }
            </button>
            <button
              type="button"
              data-testid={ `wrong-answer-${0}` }
            >
              { incorrectAnswers }
            </button>
          </>
        )}
        {(type === 'multiple')
        && (
          <div data-testid="answer-options">
            {shuffleQuestions(correctAnswer, incorrectAnswers)}
          </div>
        )}
      </div>
    );
  }
}
QuestionCard.propTypes = {
  questions: PropTypes.object,
}.isRequired;

export default QuestionCard;

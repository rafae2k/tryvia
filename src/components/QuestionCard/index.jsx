import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';

// Styles
import { QuestionContainer, AnswersContainer, Button } from './styles';

const QuestionCard = ({
  question: triviaQuestion,
  handleUserAnswer,
  isAnswersDisabled,
  userClicked,
  startTimer,
}) => {

  useEffect(() => {
    startTimer();
  }, []);

  const {
    category,
    correct_answer: correctAnswer,
    incorrect_answers: incorrectAnswers,
    // difficulty,
    question,
    // type,
  } = triviaQuestion;

  const styles = {
    default: {
      border: 'border: 1px solid black',
    },
    setBorder: (quiz) => ({
      border:
        correctAnswer === quiz
          ? '3px solid rgb(6, 240, 15)'
          : '3px solid rgb(255, 0, 0)',
    }),
  };

  // Create an array with incorrect and correct answers
  const allAnswers = [...incorrectAnswers, correctAnswer];

  // Randomize the array created before
  const randomizeAnswers = allAnswers
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  // Return the answers buttons based on randomizeAnswers array
  return (
    <QuestionContainer>
      <h2
        data-testid="question-category"
        dangerouslySetInnerHTML={ { __html: category } }
      />

      <h3
        data-testid="question-text"
        // dangerouslySetInnerHTML solves the problem of strange html characters
        // but in this specific one element whe face some tests problems
        // dangerouslySetInnerHTML={ { __html: question } }
      >
        {question}
      </h3>
      <AnswersContainer data-testid="answer-options">
        {randomizeAnswers.map((quiz, index) => (
          (correctAnswer === quiz)
            ? (
              <Button
                key={ uuid() }
                data-testid="correct-answer"
                value={ quiz }
                disabled={ isAnswersDisabled }
                onClick={ handleUserAnswer }
                dangerouslySetInnerHTML={ { __html: quiz } }
                style={ userClicked
                  ? styles.setBorder(quiz) : styles.default }
              />
            )
            : (
              <Button
                key={ uuid() }
                data-testid={ `wrong-answer-${index}` }
                value={ quiz }
                disabled={ isAnswersDisabled }
                onClick={ handleUserAnswer }
                dangerouslySetInnerHTML={ { __html: quiz } }
                style={ userClicked
                  ? styles.setBorder(quiz) : styles.default }
              />
            )
        ))}
      </AnswersContainer>
    </QuestionContainer>
  );
};

QuestionCard.propTypes = {
  question: PropTypes.object,
}.isRequired;

export default QuestionCard;

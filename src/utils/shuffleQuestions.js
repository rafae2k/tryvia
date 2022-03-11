import React from 'react';

const shuffleQuestions = (correctAnswer, incorrectAnswers) => {
  const incorrectAnswersElements = (
    incorrectAnswers
      .map((question, index) => (
        <div key={ index }>
          <button
            data-testid={ `wrong-answer-${index}` }
            type="button"
          >
            { question }
          </button>
        </div>
      ))
  );
  const correctAnswerElement = (
    (
      <button
        data-testid="correct-answer"
        type="button"
        key={ 1 }
      >
        {correctAnswer}
      </button>)
  );
  const randomize = [...incorrectAnswersElements, correctAnswerElement]
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  return randomize;
};

export default shuffleQuestions;

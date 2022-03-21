import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 9rem;
`;

export const QuestionContainer = styled.div`
  max-width: 25rem;

  text-align: center;

  filter: drop-shadow(-3px 6px 0 #452D71)
          drop-shadow(-5px 6px 0 #452D71);
  transition: .4s ease-in-out;

  .question-border {
    width: 105%;
    height: 105%;

    display: grid;
    place-content: center;

    background-color: #452D71;
    clip-path: polygon(0% 5%, 10% 5%, 10% 0%, 90% 0%, 90% 5%, 100% 5%, 100% 95%, 90% 95%, 90% 100%, 10% 100%, 10% 95%, 0% 95%);
    transform: skewX(5deg);
  }

  .question-content {
    min-height: 27rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;

    padding: 3rem 4.2rem 5rem;

    background-color: white;
    clip-path: polygon(0% 5%, 10% 5%, 10% 0%, 90% 0%, 90% 5%, 100% 5%, 100% 95%, 90% 95%, 90% 100%, 10% 100%, 10% 95%, 0% 95%);

    /* transform: skewX(5deg); */
  }
`;

export const AnswersContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 5px;
`;

export const Button = styled.button`
/* border: ${({ correct, userClicked }) => (
    (correct && userClicked && '3px solid rgb(6, 240, 15)')
    || (!correct && userClicked && '3px solid rgb(255, 0, 0)')
    || 'border: 1px solid #000'
  )}; */
`;

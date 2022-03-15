import styled from 'styled-components';

export const QuestionContainer = styled.div`
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

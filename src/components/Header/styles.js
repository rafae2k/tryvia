import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 14rem;
    height: 7rem;
  }

  nav {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 7rem;
      height: 7rem;
      border-radius: 9999999px;
      padding-left: 1rem;
    }

    div {
      text-align: start;
      font-weight: 600;
      font-size: x-large;
      color: white;

      p > span {
        margin-left: 5px;
      }
    }
  }

  .react-switch-bg > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const none = styled.div``;

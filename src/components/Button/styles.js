import styled from 'styled-components';

export const Container = styled.div`

  width: 200px;
  height: 42px;

  filter: drop-shadow(-3px 6px 0 #452D71);
  transition: .4s ease-in-out;

  :hover, :active {
    filter: drop-shadow(-5px 6px 0 #8169AD)
            drop-shadow(-7px 6px 0 #8169AD);
  }

  .button-border {
    width: 105%;
    height: 105%;

    background-color: #452D71;

    clip-path: polygon(0% 5%, 10% 5%, 10% 0%, 90% 0%, 90% 5%, 100% 5%, 100% 95%, 90% 95%, 90% 100%, 10% 100%, 10% 95%, 0% 95%);
  }

  .button-content {
    width: 100%;
    height: 100%;

    background-color: #452D71;

    clip-path: polygon(0% 5%, 10% 5%, 10% 0%, 90% 0%, 90% 5%, 100% 5%, 100% 95%, 90% 95%, 90% 100%, 10% 100%, 10% 95%, 0% 95%);
  }

  button {
    display: block;

    width: 100%;
    height: 100%;

    padding: .6rem .4rem; 

    font-size: 2rem;
    line-height: 1.5rem;
    font-weight: 800;

    background-color: #A991D5;

    color: #8169AD;

    transition: .3s ease-in-out;

    clip-path: polygon(0% 5%, 10% 5%, 10% 0%, 90% 0%, 90% 5%, 100% 5%, 100% 95%, 90% 95%, 90% 100%, 10% 100%, 10% 95%, 0% 95%);

    :not(:disabled) {
      color: white;
      background-color: #452D71;
    }
  }
`;

export const Button = styled.button``;

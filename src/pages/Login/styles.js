import styled from 'styled-components';

export const Container = styled.main`
width: 100%;
height: 100%;

display: grid;
place-content: center;
position: relative;

  img {
    position: absolute;
    height: 9rem;
    width: 10rem;
    top: 13rem;
    right: 8rem;
    transform: rotate(15deg);
  }
`;

export const LogoWrapper = styled.div`
margin-bottom: 2rem;
`;

export const FormWrapper = styled.div`

  max-width: 25rem;
  margin: 0 auto;

  filter: drop-shadow(-3px 6px 0 #452D71)
          drop-shadow(-5px 6px 0 #452D71);
  transition: .4s ease-in-out;

  :hover, :active {
    filter: drop-shadow(-3px 6px 0 #452D71)
            drop-shadow(-5px 6px 0 #452D71)
            drop-shadow(-7px 6px 0 #452D71);
  }

  .form-border {
    width: 105%;
    height: 105%;

    display: grid;
    place-content: center;

    background-color: #452D71;
    clip-path: polygon(0% 5%, 10% 5%, 10% 0%, 90% 0%, 90% 5%, 100% 5%, 100% 95%, 90% 95%, 90% 100%, 10% 100%, 10% 95%, 0% 95%);
    transform: skewX(5deg);
  }

  .form-content {
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

export const none = styled.div``;

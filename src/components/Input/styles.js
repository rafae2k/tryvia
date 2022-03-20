import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  label {
    padding: 0 .3rem;

    line-height: .8rem;

    position: absolute;
    top: 0.8rem;
    left: 1.8rem;
    
    background-color: white;
    color: #6441A5;
    font-size: 1rem;
    font-weight: 500;

    transition: .2s ease-in-out;
    z-index: 10;
  }

  :focus-within > label {
    transform: translateY(-1.3rem);
    background-color: white;
  }

  :focus-within > .workaround {
    filter: drop-shadow(-3px 6px 0 #452D71)
            drop-shadow(-5px 6px 0 #452D71);
  }

  .workaround {
    transition: .2s ease-in-out;
    filter: drop-shadow(-3px 6px 0 #452D71);
  }
`;

export const ParentDiv = styled.div`

  display: grid;
  place-content: center;

  clip-path: polygon(0% 15%, 7% 15%, 7% 0%, 93% 0%, 93% 15%, 100% 15%, 100% 85%, 93% 85%, 93% 100%, 7% 100%, 7% 85%, 0% 85%);
    
  width: 210px;
  height: 48px;
  background-color: #6441A5;
`;

export const ChildDiv = styled.div`
  clip-path: polygon(0% 15%, 7% 15%, 7% 0%, 93% 0%, 93% 15%, 100% 15%, 100% 85%, 93% 85%, 93% 100%, 7% 100%, 7% 85%, 0% 85%);
    
  width: 200px;
  height: 42px;
  background-color: white;

  input {
    width: 100%;
    height: 100%;
    padding: .6rem .4rem; 
  }
`;

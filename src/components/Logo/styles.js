import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  margin: 0;
  padding: 0;
  position: relative;

  font-size: 6rem;
  color: white;

  text-shadow: 0 0.1em 0px #452D71, 0.09em -0.06em 0 #452D71,
    0.08em 0.008em 0 #452D71, 0em 0.11em 0 #452D71,
    0.08em 0.11em 0 #452D71, 0px -0.06em 0 #452D71,
    -0.06em -0.06em 0 #452D71, -0.06em 0.11em 0 #452D71, -0.06em 0 0 #452D71;

  span {
    transform: scale(0.9);
    display: inline-block;
    font-family: "Luckiest Guy", "Poppins", sans-serif;
  }


  /* In case of separated spans */
  /* span:first-child {
    animation: bop 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards infinite
      alternate;
  } */

  span:nth-child(1) {
    z-index: 10;
    animation: bopB 1s 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards
      infinite alternate;

      img {
      width: 7.3rem;
      height: 9rem;
      
      position: absolute;
      top: -80px;
      right:-80px;
    }
  }


// Animations
@keyframes bop {
  0% {
    transform: scale(0.9);
  }
  50%,
  100% {
    transform: scale(1);
  }
}

@keyframes bopB {
  0% {
    transform: scale(0.9);
  }
  80%,
  100% {
    transform: scale(1) rotateZ(-3deg);
  }
}

`;

export const none = styled.div``;

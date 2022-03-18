// import React, { Component } from 'react';
// // import PropTypes from 'prop-types';

// class Timer extends Component {
//   state = {
//     currentTime: 30,
//   }

//   componentDidMount() {
//     const ONE_SECOND_IN_MILLISECONDS = 1000;
//     this.timerID = setInterval(
//       () => this.tick(),
//       ONE_SECOND_IN_MILLISECONDS,
//     );
//   }

//   tick() {
//     this.setState((prevState) => ({
//       currentTime: prevState.currentTime - 1,
//     }));
//   }

//   render() {
//     const { currentTime } = this.state;
//     return (
//       <div>
//         { (currentTime > 0)
//           ? <h1>{ currentTime }</h1>
//           : <h1>0</h1>
//         }
//       </div>
//     );
//   }
// }

// // Timer.propTypes = {
// //   currentTime: PropTypes.number,
// // }.isRequired;

// export default Timer;

// ---------------------------------------

// import React from 'react';

// class Timer extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       counter: 30,
//       // timeOut: false,
//     };
//     this.timer = null;
//   }

//   componentDidMount() {
//     const ONE_SECOND = 1000;
//     this.timer = setInterval(
//       () => this.setState((prevState) => ({ counter: prevState.counter - 1 })),
//       ONE_SECOND,
//     );
//   }

//   // recebo PropsAntigas , EstadoAntigo
//   componentDidUpdate(prevProps, prevState) {
//     const TIME_LIMIT = 0;

//     const { counter/* , timeOut */ } = prevState;

//     if (counter === TIME_LIMIT) {
//       this.setState({
//         counter: 30,
//         // timeOut: true,
//       });
//     }
//     console.log('Atualizando o estado do componente');
//   }

//   componentWillUnmount() {
//     console.log('Desmonatando o componente');
//     clearInterval(this.timer);
//   }

//   render() {
//     const { counter } = this.state;

//     return (
//       <section>
//         <h2>{counter}</h2>
//       </section>
//     );
//   }
// }

// export default Timer;

import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

function Timer({
  // getTimeLeft,
  isTimerEnabled,
  setTimeOver,
  resetTimer,
  setResetTimer,
}) {
  const TIMER_TIME_IN_SECONDS = 30;
  const TIMER_STEP_IN_MILLISECONDS = 1000;

  const [timer, setTimer] = useState(TIMER_TIME_IN_SECONDS);

  console.log(timer);

  useEffect(() => {
    function clear(id) {
      if (resetTimer) clearTimeout(id);
    }

    if (isTimerEnabled && timer > 0) {
      const timeOutId = setTimeout(() => {
        setTimer(timer - 1);
      }, TIMER_STEP_IN_MILLISECONDS);
      clear(timeOutId);
    }

    if (timer === 0) {
      setTimeOver();
    }

    if (resetTimer) {
      setTimer(TIMER_TIME_IN_SECONDS);
      setResetTimer();
    }
    // getTimeLeft(timer);
  }, [timer, isTimerEnabled, resetTimer]);

  return (
    <section>
      <br />
      Tempo:
      <h2>{timer < 0 ? '0' : timer}</h2>
    </section>
  );
}

Timer.propTypes = {
  getTimeLeft: PropTypes.func,
}.isRequired;

export default Timer;

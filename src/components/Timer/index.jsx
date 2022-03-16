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
import React from 'react';

class Timer extends React.Component {
  state = {

    counter: 30,
    isAnswersDisabled: false,

  }

  componentDidMount() {
    this.tick();
  }

  tick = () => {
    const { isAnswersDisabled, counter } = this.state;
    const ONE_SECOND = 1000;

    const intervalTime = () => {
      if (isAnswersDisabled === false && counter > 0) {
        this.setState((prevState) => ({
          counter: prevState.counter - 1,
        }));
      }
    };

    setInterval(intervalTime, ONE_SECOND);

    const TIME_LIMIT = 30000;
    setTimeout(() => {
      this.setState({ isAnswersDisabled: true });
    }, TIME_LIMIT);
  }

  render() {
    const { counter } = this.state;

    return (
      <section>
        <br />
        Tempo:
        <h2>{counter < 0 ? '0' : counter}</h2>
      </section>
    );
  }
}

export default Timer;

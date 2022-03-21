import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import { CountdownCircleTimer } from 'react-countdown-circle-timer';

import { Container } from './styles';


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
    <Container>
      <CountdownCircleTimer
        isPlaying={ isTimerEnabled }
        duration={ 30 }
        colors={ ['#7B61FF', '#E12C2C', '#FFA500', '#FFD700', '#FFDF00'] }
        colorsTime={ [30, 7, 8, 10] }
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    </Container>
  );
}

Timer.propTypes = {
  getTimeLeft: PropTypes.func,
}.isRequired;

export default Timer;

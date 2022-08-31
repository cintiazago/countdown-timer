import { useContext, useEffect, useState } from 'react';

import { ButtonWrapper, Container, TimerWrapper } from './styles';
import CountdownTimerContext from '../../contexts/countdown-timer/context';

interface CountdownTimerProps {
  speed: number;
}

function CountdownTimer({ speed = 1 }: CountdownTimerProps) {
  const { state, setState } = useContext(CountdownTimerContext);
  const [secondsAmount, setSecondsAmount] = useState(0);
  const [pause, setPause] = useState(false);
  const [isHalfWayThere, setIsHalfWayThere] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);
  const [textShouldStartBlinking, setTextShouldStartBlinking] = useState(false);
  const [textShouldBeRed, setTextShouldBeRed] = useState(false);

  const handlePauseToggle = () => {
    setPause(!pause);
  };

  useEffect(() => {
    setSecondsAmount(state.initialCountdown);
  }, [state.initialCountdown]);

  useEffect(() => {
    const reset = () => {
      setHasFinished(true);
      setTextShouldBeRed(false);
      setTextShouldStartBlinking(false);
      setState({
        ...state,
        hasStarted: false,
      });
    };

    setTimeout(() => {
      if (secondsAmount === 1) {
        reset();
      }
      if (!pause && secondsAmount > 0) {
        setSecondsAmount(countdown => countdown - 1);
        setIsHalfWayThere(secondsAmount < state.initialCountdown / 2);
        setTextShouldBeRed(secondsAmount < 20);
        setTextShouldStartBlinking(secondsAmount < 10);
      }
    }, 1000 / speed);
    return () => clearTimeout(secondsAmount);
  }, [secondsAmount, pause, speed, state.initialCountdown, state, setState]);

  const minutes = Math.floor(secondsAmount / 60);
  const seconds = secondsAmount % 60;

  const getClasses = () => {
    let classes = '';
    if (textShouldBeRed) {
      classes += ' red ';
    }
    if (textShouldStartBlinking) {
      classes += ' blinking ';
    }
    return classes;
  };

  return (
    <>
      {isHalfWayThere && !hasFinished ? (
        <h1>More than halfway there!</h1>
      ) : null}

      {hasFinished ? <h1>Time is Up!</h1> : null}

      <Container>
        <TimerWrapper>
          <span className={getClasses()}>
            {String(minutes).padStart(2, '0')}
          </span>
          <span className={getClasses()}>:</span>
          <span className={getClasses()}>
            {String(seconds).padStart(2, '0')}
          </span>
        </TimerWrapper>

        <ButtonWrapper>
          <button type="button" onClick={handlePauseToggle}>
            {pause ? '>' : '||'}
          </button>
        </ButtonWrapper>
      </Container>
    </>
  );
}

export default CountdownTimer;

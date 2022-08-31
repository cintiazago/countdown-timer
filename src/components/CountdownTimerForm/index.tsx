import { useContext, useState } from 'react';
import CountdownTimerContext from '../../contexts/countdown-timer/context';
import { Container } from './styles';

const TIME_IN_SECONDS = 60;

function CountdownTimerForm() {
  const { setState, state } = useContext(CountdownTimerContext);
  const [initialCountdownTime, setInitialCountdownTime] = useState(0);

  function handleSetCountdownTimer() {
    setState({
      ...state,
      initialCountdown: initialCountdownTime,
      hasStarted: true,
    });
  }

  return (
    <Container>
      <div>
        <label htmlFor="minutes">
          Countdown:
          <input
            id="minutes"
            name="minutes"
            type="number"
            pattern="[0-9]*"
            placeholder="(min)"
            onChange={e =>
              setInitialCountdownTime(
                parseFloat(e.target.value) * TIME_IN_SECONDS,
              )
            }
          />
        </label>
        <button
          className="start-button"
          type="button"
          onClick={handleSetCountdownTimer}
        >
          START
        </button>
      </div>
    </Container>
  );
}

export default CountdownTimerForm;

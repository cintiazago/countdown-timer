import { useContext, useState } from 'react';
import CountdownTimerContext from '../../contexts/countdown-timer/context';
import convertDateTimeToNewTimeZone from '../../utils/timezone';
import CountdownTimer from '../CountdownTimer';
import CountdownTimerForm from '../CountdownTimerForm';
import SpeedButton from '../SpeedButton';
import {
  CitiesContainer,
  CitiesWrapper,
  Container,
  SpeedButtonsContainer,
} from './styles';

const MILLISECONDS = 1000;

function Home() {
  const { state } = useContext(CountdownTimerContext);
  const [speedValue, setSpeedValue] = useState(1);

  const dateTimeAfterAddCountdown = new Date(
    Date.now() + state.initialCountdown * MILLISECONDS,
  );

  return (
    <Container>
      <CountdownTimerForm />

      <CountdownTimer speed={speedValue} />

      <SpeedButtonsContainer>
        <SpeedButton
          isActive={speedValue === 1}
          text="1X"
          speedValue={1}
          setSpeedValue={setSpeedValue}
        />
        <SpeedButton
          isActive={speedValue === 1.5}
          text="1.5X"
          speedValue={1.5}
          setSpeedValue={setSpeedValue}
        />
        <SpeedButton
          isActive={speedValue === 2}
          text="2X"
          speedValue={2}
          setSpeedValue={setSpeedValue}
        />
      </SpeedButtonsContainer>

      <CitiesContainer>
        <h4>Est. Deployment Time:</h4>
        <CitiesWrapper>
          <div>
            <span>London: </span>
            <span>New York: </span>
            <span>Salt Lake City: </span>
          </div>
          <div>
            <span className="bold">
              {convertDateTimeToNewTimeZone(
                dateTimeAfterAddCountdown,
                'Europe/London',
              )}
            </span>
            <span className="bold">
              {convertDateTimeToNewTimeZone(
                dateTimeAfterAddCountdown,
                'America/New_York',
              )}
            </span>
            <span className="bold">
              {convertDateTimeToNewTimeZone(
                dateTimeAfterAddCountdown,
                'America/Denver',
              )}
            </span>
          </div>
        </CitiesWrapper>
      </CitiesContainer>
    </Container>
  );
}

export default Home;

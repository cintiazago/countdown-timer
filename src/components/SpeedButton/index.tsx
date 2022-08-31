import { Dispatch, SetStateAction } from 'react';
import { Button, Container } from './styles';

interface SpeedButtonProps {
  text: string;
  isActive: boolean;
  speedValue: number;
  setSpeedValue: Dispatch<SetStateAction<number>>;
}

function SpeedButton({
  text,
  isActive,
  speedValue,
  setSpeedValue,
}: SpeedButtonProps) {
  const handleSetSpeedValue = (speed: number) => {
    setSpeedValue(speed);
  };
  return (
    <Container>
      <Button
        isActive={isActive}
        type="button"
        onClick={() => handleSetSpeedValue(speedValue)}
      >
        {text}
      </Button>
    </Container>
  );
}

export default SpeedButton;

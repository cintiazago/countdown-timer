import React, { createContext, useMemo, useState } from 'react';

type CountdownTimerType = {
  initialCountdown: number;
  hasStarted: boolean;
};

type PropsCountdownTimerContext = {
  state: CountdownTimerType;
  setState: React.Dispatch<React.SetStateAction<CountdownTimerType>>;
};

const DEFAULT_VALUE = {
  state: {
    initialCountdown: 0,
    hasStarted: false,
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setState: () => {},
};

const CountdownTimerContext =
  createContext<PropsCountdownTimerContext>(DEFAULT_VALUE);

function CountdownTimerContextProvider({ children }: any) {
  const [state, setState] = useState(DEFAULT_VALUE.state);

  const countdown = useMemo(
    () => ({
      state,
      setState,
    }),
    [state],
  );

  return (
    <CountdownTimerContext.Provider value={countdown}>
      {children}
    </CountdownTimerContext.Provider>
  );
}
export { CountdownTimerContextProvider };
export default CountdownTimerContext;

import { CountdownTimerContextProvider } from './countdown-timer/context';

function GlobalContext({ children }: any) {
  return (
    <>
      <CountdownTimerContextProvider>{children}</CountdownTimerContextProvider>;
    </>
  );
}

export default GlobalContext;

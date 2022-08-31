import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: -65px;
`;

export const TimerWrapper = styled.div`
  span {
    color: #000;
    font-size: 120px;
    font-weight: 700;
  }
  > span.red {
    color: red !important;
  }

  > span.blinking {
    animation: mymove 0.5s infinite alternate;
  }

  @keyframes mymove {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
export const ButtonWrapper = styled.div`
  button {
    background-color: transparent;
    border: 3px solid #000;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    color: #000;
    font-weight: 700;
    margin: 15px;
  }
`;

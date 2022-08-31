import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto;

  h1 {
    font-size: 18px;
    font-weight: 700;
    margin: 20px;
    padding-top: 20px;
    font-style: italic;
  }

  h4 {
    font-size: 12px;
    margin-bottom: 10px;
    text-align: left;
  }
`;

export const SpeedButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 400px;
  justify-content: center;
`;

export const CitiesContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CitiesWrapper = styled.div`
  display: flex;
  flex-direction: row;

  div {
    display: flex;
    flex-direction: column;
  }

  div > span.bold {
    font-weight: 700;
  }
`;

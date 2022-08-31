import styled from 'styled-components';

interface ButtonProps {
  isActive: boolean;
}

export const Container = styled.div`
  margin: 15px 8px;
`;

export const Button = styled.button<ButtonProps>`
  width: 60px;
  height: 40px;
  font-size: 12px;

  background-color: ${props => (props.isActive ? '#848484' : '#fff')};
  border: 2px solid #000;
  color: ${props => (props.isActive ? '#fff' : '#000')};

  :hover {
    background-color: #848484;
    color: #fff;
  }
`;

export const Title = styled.div``;

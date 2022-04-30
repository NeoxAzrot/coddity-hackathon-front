import { FC } from 'react';
import styled from 'styled-components';
import theme from 'theme';

interface BallProps {
  color?: string;
}

interface BallContainerProps {
  color?: string;
}

const BallContainer = styled.span<BallContainerProps>`
  background-color: ${({ color }) => (color ? color : theme.colors.primary)};
  border-radius: 50%;
  display: block;
  height: 5rem;
  margin: 0 0.2rem;
  width: 5rem;
`;

const Ball: FC<BallProps> = ({ color }) => {
  return <BallContainer color={color}></BallContainer>;
};

export default Ball;

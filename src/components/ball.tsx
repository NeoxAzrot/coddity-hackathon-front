import { FC } from 'react';
import styled from 'styled-components';
import theme from 'theme';

const Container = styled.span`
  background-color: ${theme.colors.primary};
  border-radius: 50%;
  display: block;
  height: 6.3rem;
  width: 6.3rem;
`;

const Ball: FC = () => {
  return <Container></Container>;
};

export default Ball;

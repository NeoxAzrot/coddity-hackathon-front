import { FC } from 'react';
import styled from 'styled-components';

interface FlexProps {
  direction?: 'row' | 'column';
  justify?: 'start' | 'end' | 'center' | 'space-between' | 'space-around';
  align?: 'start' | 'end' | 'center' | 'space-between' | 'space-around';
  marginTop?: string;
}

interface FlexContainerProps {
  direction?: 'row' | 'column';
  justify?: 'start' | 'end' | 'center' | 'space-between' | 'space-around';
  align?: 'start' | 'end' | 'center' | 'space-between' | 'space-around';
  marginTop?: string;
}

const Container = styled.div<FlexContainerProps>`
  align-items: ${({ align }) => align && align};
  display: flex;
  flex-direction: ${({ direction }) => direction && direction};
  justify-content: ${({ justify }) => justify && justify};
  margin-top: ${({ marginTop }) => marginTop};
`;

const Flex: FC<FlexProps> = ({ children, direction, justify, align, marginTop }) => {
  return (
    <Container direction={direction} justify={justify} align={align} marginTop={marginTop}>
      {children}
    </Container>
  );
};

export default Flex;

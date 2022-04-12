import { FC } from 'react';
import styled from 'styled-components';

interface FlexProps {
  direction?: 'row' | 'column';
  justify?: 'start' | 'end' | 'center' | 'space-between' | 'space-around';
  align?: 'start' | 'end' | 'center' | 'space-between' | 'space-around';
}

interface FlexContainerProps {
  direction?: 'row' | 'column';
  justify?: 'start' | 'end' | 'center' | 'space-between' | 'space-around';
  align?: 'start' | 'end' | 'center' | 'space-between' | 'space-around';
}

const Container = styled.div<FlexContainerProps>`
  align-items: ${({ align }) => align && align};
  display: flex;
  flex-direction: ${({ direction }) => direction && direction};
  justify-content: ${({ justify }) => justify && justify};
`;

const Flex: FC<FlexProps> = ({ children, direction, justify, align }) => {
  return (
    <Container direction={direction} justify={justify} align={align}>
      {children}
    </Container>
  );
};

export default Flex;

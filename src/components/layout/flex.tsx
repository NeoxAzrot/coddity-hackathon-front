import { FC } from 'react';
import styled from 'styled-components';

interface FlexProps {
  direction?: 'row' | 'column';
  justify?: 'start' | 'end' | 'center' | 'space-between' | 'space-around';
  align?: 'start' | 'end' | 'center' | 'space-between' | 'space-around';
  marginTop?: string;
  marginBottom?: string;
  width?: string;
  className?: string;
}

interface FlexContainerProps {
  direction?: 'row' | 'column';
  justify?: 'start' | 'end' | 'center' | 'space-between' | 'space-around';
  align?: 'start' | 'end' | 'center' | 'space-between' | 'space-around';
  marginTop?: string;
  marginBottom?: string;
  width?: string;
}

const Container = styled.div<FlexContainerProps>`
  align-items: ${({ align }) => align && align};
  display: flex;
  flex-direction: ${({ direction }) => direction && direction};
  justify-content: ${({ justify }) => justify && justify};
  margin-bottom: ${({ marginBottom }) => marginBottom};
  margin-top: ${({ marginTop }) => marginTop};
  width: ${({ width }) => width};
`;

const Flex: FC<FlexProps> = ({
  children,
  direction,
  justify,
  align,
  marginTop,
  marginBottom,
  width,
  className,
}) => {
  return (
    <Container
      direction={direction}
      justify={justify}
      align={align}
      marginTop={marginTop}
      marginBottom={marginBottom}
      width={width}
      className={className}
    >
      {children}
    </Container>
  );
};

export default Flex;

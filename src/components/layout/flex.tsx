import { FC } from 'react';
import styled from 'styled-components';

interface FlexProps {
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  justify?: 'start' | 'end' | 'center' | 'space-between' | 'space-around';
  align?: 'start' | 'end' | 'center' | 'space-between' | 'space-around';
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  width?: string;
  className?: string;
  id?: string;
}

interface FlexContainerProps {
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  justify?: 'start' | 'end' | 'center' | 'space-between' | 'space-around';
  align?: 'start' | 'end' | 'center' | 'space-between' | 'space-around';
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  width?: string;
}

const Container = styled.div<FlexContainerProps>`
  align-items: ${({ align }) => align && align};
  display: flex;
  flex-direction: ${({ direction }) => direction && direction};
  justify-content: ${({ justify }) => justify && justify};
  margin-bottom: ${({ marginBottom }) => marginBottom};
  margin-left: ${({ marginLeft }) => marginLeft};
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
  marginLeft,
  width,
  className,
  id,
}) => {
  return (
    <Container
      direction={direction}
      justify={justify}
      align={align}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      width={width}
      className={className}
      id={id}
    >
      {children}
    </Container>
  );
};

export default Flex;

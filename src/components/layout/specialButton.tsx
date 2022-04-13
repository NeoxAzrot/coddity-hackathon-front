import { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import theme from 'theme';

interface ButtonProps {
  url: string;
  background?: string;
  className?: string;
}

interface ButtonContainerProps {
  background?: string;
}

const Container = styled.div<ButtonContainerProps>`
  background-color: ${({ background }) => (background ? background : theme.colors.primary)};
  border-radius: 50%;
  font-family: ${theme.fonts.primary};
  padding: 1.5rem 5rem;

  &:hover {
    color: ${theme.colors.primary};
  }
`;

const Button: FC<ButtonProps> = ({ children, className, url, background }) => {
  return (
    <Container background={background} className={className}>
      <Link to={url}>{children}</Link>
    </Container>
  );
};

export default Button;

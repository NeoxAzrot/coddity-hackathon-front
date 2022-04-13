import { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import theme from 'theme';

interface ButtonProps {
  url: string;
  className?: string;
}

const Container = styled.div`
  background-color: ${theme.colors.primary};
  border-radius: 50px;
  font-family: ${theme.fonts.primary};
  padding: 3rem 4rem;
  position: relative;
  text-transform: uppercase;

  &:hover {
    color: ${theme.colors.primary};
  }
`;

const Button: FC<ButtonProps> = ({ children, className, url }) => {
  return (
    <Container className={className}>
      <Link to={url}>{children}</Link>
    </Container>
  );
};

export default Button;

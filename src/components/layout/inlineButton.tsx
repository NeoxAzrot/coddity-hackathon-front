import { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import theme from 'theme';

interface ButtonProps {
  url: string;
}

const Container = styled.div`
  font-family: ${theme.fonts.primary};
  font-size: 1.8rem;
  position: relative;
  text-transform: uppercase;

  &:hover {
    color: ${theme.colors.primary};
  }
`;

const Button: FC<ButtonProps> = ({ children, url }) => {
  return (
    <Container>
      <Link to={url}>{children}</Link>
    </Container>
  );
};

export default Button;

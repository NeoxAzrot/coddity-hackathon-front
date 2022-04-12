import { FC } from 'react';
import styled from 'styled-components';
import theme from 'theme';

const Container = styled.footer`
  font-family: ${theme.fonts.primary};
  font-size: 1.6rem;

  &:hover {
    color: ${theme.colors.primary};
  }
`;

const Footer: FC = () => {
  return (
    <Container>
      <p>© All rights reserved Developped by </p>
      <a target="_blank" href="https://eliseechasseriau.com/" rel="noreferrer">
        Elise Echasseriau
      </a>{' '}
      &{' '}
      <a target="_blank" href="https://samilafrance.com/" rel="noreferrer">
        Sami Lafrance
      </a>
    </Container>
  );
};

export default Footer;

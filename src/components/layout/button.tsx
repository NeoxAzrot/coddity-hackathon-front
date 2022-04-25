import { FC } from 'react';
import styled from 'styled-components';
import theme from 'theme';

import Text from 'components/layout/text';

interface ButtonProps {
  className?: string;
  content: string;
  onClick: () => void;
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

const ButtonContainer = styled.button``;

const Button: FC<ButtonProps> = ({ className, content, onClick }) => {
  return (
    <Container className={className} onClick={onClick}>
      <ButtonContainer>
        <Text
          content={content}
          color={theme.colors.black}
          fontFamily={theme.fonts.primary}
          size="2.5rem"
          weight="500"
          uppercase
        />
      </ButtonContainer>
    </Container>
  );
};

export default Button;

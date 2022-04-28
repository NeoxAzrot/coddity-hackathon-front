import { FC } from 'react';
import styled from 'styled-components';
import theme from 'theme';

import Text from 'components/layout/text';

interface ButtonProps {
  className?: string;
  content: string;
  onClick: () => void;
  backgroundColor?: string;
  marginLeft?: string;
  marginTop?: string;
}

interface ButtonContainerProps {
  backgroundColor?: string;
  marginLeft?: string;
  marginTop?: string;
}

const ButtonContainer = styled.button<ButtonContainerProps>`
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : theme.colors.primary};
  border-radius: 3rem;
  cursor: pointer;
  font-family: ${theme.fonts.primary};
  margin-left: ${({ marginLeft }) => marginLeft && marginLeft};
  margin-top: ${({ marginTop }) => marginTop && marginTop};
  padding: 1.5rem 3rem;
  user-select: none;
  width: fit-content;
`;

const Button: FC<ButtonProps> = ({
  className,
  content,
  onClick,
  backgroundColor,
  marginLeft,
  marginTop,
}) => {
  return (
    <ButtonContainer
      className={className}
      onClick={onClick}
      backgroundColor={backgroundColor}
      marginLeft={marginLeft}
      marginTop={marginTop}
    >
      <Text content={content} size="2.2rem" weight="600" />
    </ButtonContainer>
  );
};

export default Button;

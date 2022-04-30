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
  size?: string;
  fontFamily?: string;
  weight?: '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
  secondary?: boolean;
  small?: boolean;
  large?: boolean;
  special?: boolean;
}

interface ButtonContainerProps {
  backgroundColor?: string;
  marginLeft?: string;
  marginTop?: string;
  secondary?: boolean;
  small?: boolean;
  large?: boolean;
  special?: boolean;
}

const ButtonContainer = styled.button<ButtonContainerProps>`
  background-color: ${({ secondary, backgroundColor }) =>
    secondary ? 'transparent' : backgroundColor ? backgroundColor : theme.colors.primary};
  border: ${({ secondary, backgroundColor }) =>
    secondary
      ? `0.2rem solid ${backgroundColor ? backgroundColor : theme.colors.primary}`
      : 'none'};
  border-radius: ${({ special }) => (special ? '50%' : '3rem')};
  cursor: pointer;
  margin-left: ${({ marginLeft }) => marginLeft && marginLeft};
  margin-top: ${({ marginTop }) => marginTop && marginTop};
  padding: ${({ small, large, special }) =>
    small ? '0.5rem 2.5rem' : large ? '2rem 4rem' : special ? '1.5rem 5rem' : '1rem 3rem'};
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
  size,
  fontFamily,
  weight,
  secondary,
  small,
  large,
  special,
}) => {
  return (
    <ButtonContainer
      className={className}
      onClick={onClick}
      backgroundColor={backgroundColor}
      marginLeft={marginLeft}
      marginTop={marginTop}
      secondary={secondary}
      small={small}
      large={large}
      special={special}
    >
      <Text
        content={content}
        size={size ? size : '2.2rem'}
        weight={weight ? weight : '500'}
        fontFamily={fontFamily ? fontFamily : theme.fonts.primary}
      />
    </ButtonContainer>
  );
};

export default Button;

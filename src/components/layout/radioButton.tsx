import { FC } from 'react';
import styled from 'styled-components';
import theme from 'theme';

import Text from 'components/layout/text';

interface RadioButtonProps {
  color?: string;
  content: string;
  onClick: () => void;
}

interface RadioButtonInputProps {
  color?: string;
  isHover?: boolean;
}

const RadioButtonContainer = styled.button`
  align-items: center;
  cursor: pointer;
  display: flex;

  &:hover {
    span {
      &:after {
        opacity: 1;
      }
    }
  }
`;

const Input = styled.span<RadioButtonInputProps>`
  border: 0.2rem solid;
  border-color: ${({ color }) => (color ? color : theme.colors.black)};
  border-radius: 50%;
  display: block;
  height: 4rem;
  position: relative;
  width: 4rem;

  &:after {
    background-color: ${({ color }) => (color ? color : theme.colors.black)};
    border-radius: 50%;
    content: '';
    height: 90%;
    left: 50%;
    opacity: 0;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: opacity 0.2s ease-in-out;
    width: 90%;
  }
`;

const RadioButton: FC<RadioButtonProps> = ({ color, content, onClick }) => {
  return (
    <RadioButtonContainer onClick={onClick}>
      <Input color={color} />
      <Text content={content} marginLeft="3rem" align="left" />
    </RadioButtonContainer>
  );
};

export default RadioButton;

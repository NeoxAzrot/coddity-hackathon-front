import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaCopy } from 'react-icons/fa';
import styled from 'styled-components';
import theme from 'theme';

import Text from 'components/layout/text';

interface InputProps {
  value?: string;
  onClick?: () => void;
  width?: string;
  hasIcon?: boolean;
  disabled?: boolean;
}

interface InputContainerProps {
  width?: string;
  cursorPointer?: boolean;
}

interface StyledInputProps {
  hasIcon?: boolean;
  cursorPointer?: boolean;
}

const InputContainer = styled.div<InputContainerProps>`
  cursor: ${({ cursorPointer }) => cursorPointer && 'pointer'};
  position: relative;
  width: ${({ width }) => width && width};
`;

const StyledInput = styled.input<StyledInputProps>`
  background-color: transparent;
  border: none;
  border-bottom: 0.2rem solid ${theme.colors.black};
  color: ${theme.colors.black};
  cursor: ${({ cursorPointer }) => cursorPointer && 'pointer'};
  font-family: ${theme.fonts.primary};
  font-size: 1.8rem;
  font-weight: 300;
  padding: 1rem 1.5rem;
  padding-right: ${({ hasIcon }) => (hasIcon ? '4.5rem' : '1.5rem')};
  width: 100%;
`;

const IconContainer = styled.span`
  position: absolute;
  right: 1.5rem;
  top: 50%;
  transform: translateY(-50%);
`;

const InfoContainer = styled.span`
  background-color: ${theme.colors.light};
  border-radius: 3rem;
  bottom: -3rem;
  padding: 0.5rem 1rem;
  position: absolute;

  right: 0;
`;

const Input: FC<InputProps> = ({ value, onClick, width, hasIcon, disabled }) => {
  const { t } = useTranslation();
  const [hasClicked, setHasClicked] = useState<boolean>(false);

  const handleClick = () => {
    if (onClick) {
      setHasClicked(true);
      setTimeout(() => {
        setHasClicked(false);
      }, 1000);

      onClick();
    }
  };

  return (
    <InputContainer width={width} onClick={handleClick} cursorPointer={onClick ? true : false}>
      <StyledInput
        value={value}
        hasIcon={hasIcon}
        cursorPointer={onClick ? true : false}
        disabled={disabled}
      />
      {hasIcon && (
        <>
          <IconContainer>
            <FaCopy color={theme.colors.dark} size="1.8rem" />
          </IconContainer>

          {hasClicked && (
            <InfoContainer>
              <Text content={t('button.copy')} size="1.2rem" />
            </InfoContainer>
          )}
        </>
      )}
    </InputContainer>
  );
};

export default Input;

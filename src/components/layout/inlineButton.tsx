import { FC } from 'react';
import styled from 'styled-components';
import theme from 'theme';

import Text from 'components/layout/text';

interface InlineButtonProps {
  content: string;
  arrowPosition: 'left' | 'right';
  onClick: () => void;
  className?: string;
}

interface ArrowProps {
  arrowPosition: 'left' | 'right';
}

const InlineButtonContainer = styled.button`
  align-items: center;
  cursor: pointer;
  display: flex;
  position: relative;
  user-select: none;

  &:after {
    background-color: ${theme.colors.light};
    border-radius: 50%;
    content: '';
    height: 4rem;
    left: -2rem;
    position: absolute;
    transition: border-radius 0.4s cubic-bezier(0.77, 0, 0.175, 1),
      width 0.4s cubic-bezier(0.77, 0, 0.175, 1);
    width: 4rem;
    z-index: -1;
  }

  &:hover {
    &:after {
      border-radius: 3rem;
      width: calc(100% + 4rem);
    }
  }
`;

const Arrow = styled.span<ArrowProps>`
  background: ${theme.colors.black};
  font-size: 0;
  height: 0.2rem;

  margin-left: ${({ arrowPosition }) => (arrowPosition === 'left' ? '0' : '1.5rem')};
  margin-right: ${({ arrowPosition }) => (arrowPosition === 'left' ? '1.5rem' : '0')};
  position: relative;
  width: 6rem;

  &:before {
    background: ${theme.colors.black};
    bottom: 0;
    content: '';
    height: 0.2rem;
    left: ${({ arrowPosition }) => arrowPosition === 'left' && '0'};
    position: absolute;
    right: ${({ arrowPosition }) => arrowPosition === 'right' && '0'};
    transform: rotate(-35deg)
      translateX(${({ arrowPosition }) => (arrowPosition === 'left' ? '-0.5px' : '0.5px')});
    transform-origin: center ${({ arrowPosition }) => (arrowPosition === 'left' ? 'left' : 'right')};
    width: 1rem;
  }

  &:after {
    background: ${theme.colors.black};
    bottom: 0;
    content: '';
    height: 0.2rem;
    left: ${({ arrowPosition }) => arrowPosition === 'left' && '0'};
    position: absolute;
    right: ${({ arrowPosition }) => arrowPosition === 'right' && '0'};
    transform: rotate(35deg)
      translateX(${({ arrowPosition }) => (arrowPosition === 'left' ? '-0.5px' : '0.5px')});
    transform-origin: center ${({ arrowPosition }) => (arrowPosition === 'left' ? 'left' : 'right')};
    width: 1rem;
  }
`;

const InlineButton: FC<InlineButtonProps> = ({ content, arrowPosition, onClick, className }) => {
  return (
    <InlineButtonContainer onClick={onClick} className={className}>
      {arrowPosition === 'left' && <Arrow arrowPosition={arrowPosition} />}

      <Text content={content} fontFamily={theme.fonts.secondary} size="2.2rem" />

      {arrowPosition === 'right' && <Arrow arrowPosition={arrowPosition} />}
    </InlineButtonContainer>
  );
};

export default InlineButton;

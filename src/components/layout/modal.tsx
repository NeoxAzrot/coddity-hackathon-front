import { FC, useEffect } from 'react';
import styled from 'styled-components';
import theme from 'theme';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ModalContainerModalProps {
  isOpen: boolean;
}

const ModalContainer = styled.div<ModalContainerModalProps>`
  height: 100%;
  left: 50%;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: opacity 0.3s ease-in-out;
  width: 100%;
  z-index: ${({ isOpen }) => (isOpen ? '100' : '-1')};
`;

const Shadow = styled.span`
  background-color: ${theme.colors.black};
  display: block;
  height: 100%;
  left: 50%;
  opacity: 0.7;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  z-index: -1;
`;

const ContentContainer = styled.div`
  background-color: ${theme.colors.background};
  left: 50%;
  padding: 10rem 8rem;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  width: fit-content;

  @media screen and (max-width: ${theme.layout.md}) {
    padding: 6rem 3rem;
    width: 90%;
  }
`;

const CloseButton = styled.span`
  cursor: pointer;
  height: 3rem;
  position: absolute;
  right: 2rem;
  top: 2rem;
  width: 3rem;

  &:before,
  &:after {
    background-color: ${theme.colors.black};
    content: '';
    height: 3rem;
    left: 1.5rem;
    position: absolute;
    width: 0.1rem;
  }
  &::before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;

const Modal: FC<ModalProps> = ({ children, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <ModalContainer isOpen={isOpen}>
      <Shadow onClick={onClose} />

      <ContentContainer>
        <CloseButton onClick={onClose} />
        {children}
      </ContentContainer>
    </ModalContainer>
  );
};

export default Modal;

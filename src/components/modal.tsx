import { FC, useEffect } from 'react';
import styled from 'styled-components';

interface ModalProps {
  isOpen: boolean;
}

interface ContainerModalProps {
  isOpen: boolean;
}

const Container = styled.div<ContainerModalProps>`
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

const Modal: FC<ModalProps> = ({ children, isOpen }) => {
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

  return <Container isOpen={isOpen}>{children}</Container>;
};

export default Modal;

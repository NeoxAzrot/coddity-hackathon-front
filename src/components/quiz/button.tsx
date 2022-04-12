import { FC } from 'react';
import styled from 'styled-components';

interface ButtonProps {
  options: string;
}

const Container = styled.button``;

const Button: FC<ButtonProps> = ({ options }) => {
  return (
    <Container>
      <button>
        {' '}
        <span>a.</span>
        {options}
      </button>
    </Container>
  );
};

export default Button;

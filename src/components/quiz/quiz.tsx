import { FC } from 'react';
import styled from 'styled-components';

import Button from 'components/quiz/button';

const Container = styled.div``;

const Quiz: FC = () => {
  return (
    <Container>
      <p>
        Sans action de notre part, à combien le réchauffement planétaire devrait se situer entre
        2030 et 2050 ?
      </p>
      <Button options={'hello'}></Button>
      <p>01/20</p>
    </Container>
  );
};

export default Quiz;

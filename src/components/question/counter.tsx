import { FC } from 'react';
import styled from 'styled-components';
import theme from 'theme';

import Flex from 'components/layout/flex';
import Text from 'components/layout/text';

import { addZeroToNumbers } from 'utils/numbers';

interface CounterProps {
  count: number;
  maxQuestions: number;
}

const CounterContainer = styled(Flex)`
  bottom: 6rem;
  left: 6rem;
  position: absolute;

  @media screen and (max-width: ${theme.layout.md}) {
    bottom: 3rem;
    left: 3rem;
  }
`;

const Counter: FC<CounterProps> = ({ count, maxQuestions }) => {
  const newCount = count > maxQuestions ? maxQuestions : count;
  const formattedCount = addZeroToNumbers(newCount);

  const formattedMaxQuestions = maxQuestions < 10 ? `0${maxQuestions}` : maxQuestions;

  return (
    <CounterContainer marginTop="5rem">
      <Text content={formattedCount.toString()} fontFamily={theme.fonts.secondary} size="7.2rem" />
      <Text
        content={`/ ${formattedMaxQuestions}`}
        fontFamily={theme.fonts.secondary}
        size="2.2rem"
        marginTop="1rem"
        marginLeft="0.5rem"
      />
    </CounterContainer>
  );
};

export default Counter;

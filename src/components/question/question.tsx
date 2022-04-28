import { FC } from 'react';
import theme from 'theme';

import Text from 'components/layout/text';

interface QuestionProps {
  question: string;
}

const Question: FC<QuestionProps> = ({ question }) => {
  return (
    <Text
      content={question}
      fontFamily={theme.fonts.secondary}
      align="center"
      weight="700"
      size="2.2rem"
    />
  );
};

export default Question;

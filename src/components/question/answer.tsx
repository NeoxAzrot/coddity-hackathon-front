import { FC } from 'react';

import RadioButton from 'components/layout/radioButton';

interface AnswerProps {
  answer: string;
  color: string;
  onClick: () => void;
}

const Answer: FC<AnswerProps> = ({ answer, color, onClick }) => {
  return <RadioButton content={answer} color={color} onClick={onClick} />;
};

export default Answer;

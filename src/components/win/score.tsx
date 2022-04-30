import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import theme from 'theme';

import Flex from 'components/layout/flex';
import Text from 'components/layout/text';

interface ScoreProps {
  correctAnswers: number;
}

const Score: FC<ScoreProps> = ({ correctAnswers }) => {
  const { t } = useTranslation();
  const score = correctAnswers * 10;

  return (
    <>
      <Text
        content={t('quiz.result.title')}
        fontFamily={theme.fonts.secondary}
        weight="700"
        size="2.6rem"
      />
      <Flex marginTop="3rem">
        <Text content={score.toString()} fontFamily={theme.fonts.secondary} size="7.2rem" />
        <Text
          content={t('quiz.result.points')}
          fontFamily={theme.fonts.secondary}
          size="2.2rem"
          marginTop="1rem"
          marginLeft="0.5rem"
        />
      </Flex>
    </>
  );
};

export default Score;

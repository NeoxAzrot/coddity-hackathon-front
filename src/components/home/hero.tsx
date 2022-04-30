import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import theme from 'theme';

import Button from 'components/layout/button';
import Flex from 'components/layout/flex';
import Text from 'components/layout/text';

interface HeroProps {
  onClick: () => void;
}

const Hero: FC<HeroProps> = ({ onClick }) => {
  const { t } = useTranslation();

  return (
    <Flex direction="column" marginTop="10rem">
      <Flex direction="row" justify="space-between">
        <Text
          content={t('home.hero.title')}
          fontFamily={theme.fonts.secondary}
          size="12rem"
          uppercase
          width="50%"
        />

        <Flex justify="center" align="end" width="50%" marginLeft="3rem">
          <Button content={t('button.start_quiz')} onClick={onClick} large />
        </Flex>
      </Flex>

      <Text
        dangerouslySetInnerHTML={{ __html: t('home.hero.subtitle') }}
        size="1.8rem"
        lineHeight="2em"
        marginTop="5rem"
      />
    </Flex>
  );
};

export default Hero;
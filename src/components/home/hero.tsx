import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import theme from 'theme';

import Ball from 'components/ball';
import Button from 'components/layout/button';
import Flex from 'components/layout/flex';
import Text from 'components/layout/text';

import { useViewport } from 'hooks/useViewport';

interface HeroProps {
  onClick: () => void;
}

const Hero: FC<HeroProps> = ({ onClick }) => {
  const { t } = useTranslation();
  const { isMobile } = useViewport();

  const PYRAMID_SIZE = 3;

  const getRandomColor = () => {
    const colors = [
      theme.colors.primary,
      theme.colors.secondary,
      theme.colors.tertiary,
      theme.colors.quaternary,
    ];
    const randomIndex = Math.floor(Math.random() * colors.length);

    return colors[randomIndex];
  };

  return (
    <Flex direction="column" marginTop="10rem">
      <Flex direction={isMobile ? 'column' : 'row'} justify="space-between" align="center">
        <Text
          content={t('home.hero.title')}
          fontFamily={theme.fonts.secondary}
          size={isMobile ? '4.8rem' : '12rem'}
          uppercase
          width={isMobile ? '100%' : '50%'}
          type="h1"
        />

        {isMobile && (
          <Text
            dangerouslySetInnerHTML={{ __html: t('home.hero.subtitle') }}
            size="1.8rem"
            lineHeight="2em"
            marginTop="2rem"
            marginBottom="3rem"
          />
        )}

        <Flex
          direction="column"
          align="center"
          justify="end"
          width={isMobile ? '100%' : '50%'}
          marginLeft={isMobile ? '0' : '3rem'}
        >
          <Flex direction="column-reverse" align="center">
            {Array.from(Array(PYRAMID_SIZE)).map((_, index) => {
              return (
                <Flex key={index}>
                  {Array.from(Array(PYRAMID_SIZE - index)).map((ball, ballIndex) => {
                    return <Ball key={`${index}-${ballIndex}`} color={getRandomColor()} />;
                  })}
                </Flex>
              );
            })}
          </Flex>

          <Button content={t('button.start_quiz')} onClick={onClick} large marginTop="0.2rem" />
        </Flex>
      </Flex>

      {!isMobile && (
        <Text
          dangerouslySetInnerHTML={{ __html: t('home.hero.subtitle') }}
          size="1.8rem"
          lineHeight="2em"
          marginTop="5rem"
        />
      )}
    </Flex>
  );
};

export default Hero;

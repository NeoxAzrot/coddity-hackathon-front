import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import theme from 'theme';

import Button from 'components/layout/button';
import Flex from 'components/layout/flex';
import Input from 'components/layout/input';
import Text from 'components/layout/text';

import { useViewport } from 'hooks/useViewport';

interface ChallengeProps {
  slug: string;
}

const Challenge: FC<ChallengeProps> = ({ slug }) => {
  const { t } = useTranslation();
  const { isMobile } = useViewport();
  const navigate = useNavigate();

  const url = `${process.env.REACT_APP_WEBSITE_URL}/quiz/${slug}`;

  const handleCopyLinkClick = () => {
    navigator.clipboard.writeText(url);
  };

  return (
    <>
      <Text
        content={t('quiz.challenge.title')}
        fontFamily={theme.fonts.secondary}
        weight="700"
        size="2.6rem"
        align="center"
      />

      <Flex direction="column" align="center" marginTop="12rem" width="100%">
        <Input
          value={url}
          width={isMobile ? '100%' : '80%'}
          hasIcon
          onClick={handleCopyLinkClick}
          disabled
        />
        <Button
          content={t('button.home')}
          marginTop="5rem"
          onClick={() => {
            navigate('/');
          }}
        />
      </Flex>
    </>
  );
};

export default Challenge;

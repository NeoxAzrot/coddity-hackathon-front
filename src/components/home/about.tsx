import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import theme from 'theme';

import Button from 'components/layout/button';
import Flex from 'components/layout/flex';
import Text from 'components/layout/text';

interface AboutProps {
  onClick: () => void;
}

const StyledButton = styled(Button)`
  margin-left: 3rem;
`;

const About: FC<AboutProps> = ({ onClick }) => {
  const { t } = useTranslation();
  const [showButton, setShowButton] = useState<boolean>(false);

  return (
    <Flex direction="column" marginTop="15rem" id="about">
      <Text
        content={t('home.about.title')}
        fontFamily={theme.fonts.secondary}
        size="2.2rem"
        weight="600"
        uppercase
        type="h2"
      />
      <Text
        dangerouslySetInnerHTML={{ __html: t('home.about.description') }}
        size="1.8rem"
        lineHeight="1.8em"
        marginTop="2rem"
      />
      <Text
        dangerouslySetInnerHTML={{ __html: t('home.about.description_2') }}
        size="1.8rem"
        lineHeight="1.8em"
        marginTop="3rem"
      />
      <Text
        dangerouslySetInnerHTML={{ __html: t('home.about.description_3') }}
        size="1.8rem"
        lineHeight="1.8em"
        marginTop="3rem"
      />

      <Text content={t('home.about.question')} size="1.8rem" align="center" marginTop="4rem" />

      <Flex justify="center" marginTop="3rem">
        <Button onClick={onClick} content={t('button.yes')} special />
        {showButton ? (
          <StyledButton onClick={onClick} content={t('button.yes')} special />
        ) : (
          <StyledButton
            onClick={() => setShowButton(true)}
            content={t('button.no')}
            backgroundColor={theme.colors.secondary}
            special
          />
        )}
      </Flex>
    </Flex>
  );
};

export default About;

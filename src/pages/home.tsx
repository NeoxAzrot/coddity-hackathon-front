import { useMutation } from '@apollo/client';
import { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import theme from 'theme';

import { CREATE_SURVEY } from 'api/survey.apollo';

import Ball from 'components/ball';
import Button from 'components/layout/button';
import Flex from 'components/layout/flex';
import Layout from 'components/layout/layout';
import SpecialButton from 'components/layout/specialButton';
import Text from 'components/layout/text';
import Meta from 'components/seo/meta';

const StyledButton = styled(Button)`
  align-self: flex-end;
`;

const StyledSpecialButton = styled(SpecialButton)`
  margin-left: 3rem;
`;

const Home: FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [createSurvey, { error }] = useMutation<CreateSurvey>(CREATE_SURVEY);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleCreateQuiz = async () => {
    await createSurvey().then((res) => {
      if (!error) {
        navigate(`/quiz/${res.data?.createSurvey.slug}`);
      }
    });
  };

  return (
    <Layout>
      <Meta
        title={t('seo:title')}
        description={t('seo:description')}
        url="/"
        image="/favicon/android-chrome-512x512.png"
      />
      <Flex direction="column">
        <Flex direction="row" justify="space-between">
          <Text
            content={t('header.title')}
            color={theme.colors.black}
            fontFamily={theme.fonts.secondary}
            size="13rem"
            uppercase
            width="50%"
            marginTop="11rem"
          />
          <Flex justify="center">
            <Ball />
            <StyledButton content={t('button.start_quiz')} onClick={handleCreateQuiz} />
          </Flex>
        </Flex>
        <Text
          dangerouslySetInnerHTML={{ __html: t('header.subtitle') }}
          color={theme.colors.black}
          fontFamily={theme.fonts.primary}
          size="2rem"
          lineHeight="2"
          marginTop="3rem"
        />
      </Flex>
      <Flex direction="column">
        <Text
          content={t('about.title')}
          color={theme.colors.black}
          fontFamily={theme.fonts.secondary}
          size="2.2rem"
          weight="600"
          uppercase
          marginTop="22rem"
        />
        <Text
          dangerouslySetInnerHTML={{ __html: t('about.description') }}
          color={theme.colors.black}
          fontFamily={theme.fonts.primary}
          size="1.8rem"
          lineHeight="1.8"
          marginTop="2rem"
        />
        <Text
          content={t('about.description_2')}
          color={theme.colors.black}
          fontFamily={theme.fonts.primary}
          size="1.8rem"
          lineHeight="1.8"
          marginTop="4rem"
        />
        <Text
          content={t('about.description_3')}
          color={theme.colors.black}
          fontFamily={theme.fonts.primary}
          size="1.8rem"
          lineHeight="1.8"
          marginTop="4rem"
        />
      </Flex>
      <Text
        content={t('about.question')}
        color={theme.colors.black}
        fontFamily={theme.fonts.primary}
        size="1.8rem"
        align="center"
        marginTop="2rem"
      />
      <Flex direction="row" justify="center" marginTop="2.5rem">
        <SpecialButton url="/">
          <Text
            content={t('button.yes')}
            color={theme.colors.black}
            fontFamily={theme.fonts.primary}
            size="2rem"
            align="center"
          />
        </SpecialButton>
        <StyledSpecialButton url="/" background={theme.colors.secondary}>
          <Text
            content={t('button.no')}
            color={theme.colors.black}
            fontFamily={theme.fonts.primary}
            size="2rem"
            align="center"
          />
        </StyledSpecialButton>
      </Flex>

      <Flex direction="column">
        <Text
          content={t('data.title')}
          color={theme.colors.black}
          fontFamily={theme.fonts.secondary}
          size="2.2rem"
          weight="600"
          uppercase
          marginTop="22rem"
        />
        <Text
          content={t('data.temp.subtitle')}
          color={theme.colors.black}
          fontFamily={theme.fonts.secondary}
          size="2.2rem"
          marginTop="5rem"
        />
        <Text
          content={t('data.temp.description')}
          color={theme.colors.black}
          fontFamily={theme.fonts.primary}
          size="1.8rem"
          lineHeight="1.8"
          marginTop="4rem"
        />
      </Flex>
    </Layout>
  );
};

export default Home;

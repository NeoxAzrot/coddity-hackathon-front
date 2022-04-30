import { FC, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import theme from 'theme';

import Flex from 'components/layout/flex';
import InlineButton from 'components/layout/inlineButton';
import Layout from 'components/layout/layout';
import Text from 'components/layout/text';
import Meta from 'components/seo/meta';

const StyledInlineButton = styled(InlineButton)`
  bottom: 15rem;
  position: absolute;
  right: 6rem;
`;

const Error404: FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Layout fullPage>
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="googlebot" content="noindex, nofollow" />
      </Helmet>

      <Meta
        title={t('seo:404.title')}
        description={t('seo:404.description')}
        url="/404"
        image="/favicon/android-chrome-512x512.png"
      />

      <Flex direction="column" align="center" marginTop="5rem">
        <Text
          content={t('error404.title')}
          size="6.4rem"
          weight="700"
          uppercase
          type="h1"
          fontFamily={theme.fonts.secondary}
        />

        <Text content={t('error404.description')} size="1.8rem" marginTop="1rem" />
      </Flex>

      <StyledInlineButton
        content={t('button.back_home')}
        arrowPosition="right"
        onClick={() => {
          navigate('/');
        }}
      />
    </Layout>
  );
};

export default Error404;

import { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import theme from 'theme';

import Layout from 'components/layout/layout';
import Text from 'components/layout/text';
import Quiz from 'components/quiz/quiz';
import Meta from 'components/seo/meta';

const Home: FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { t: tSeo } = useTranslation('seo');
  const { t } = useTranslation();

  return (
    <Layout>
      <Meta
        title={tSeo('title')}
        description={tSeo('description')}
        url="/"
        image="/favicon/android-chrome-512x512.png"
      />
      <Text content={t('example')} color={theme.colors.quaternary} />
      <Quiz></Quiz>
    </Layout>
  );
};

export default Home;

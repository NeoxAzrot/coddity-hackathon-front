import { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import Layout from 'components/layout/layout';
import Meta from 'components/seo/meta';

const Quiz: FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { t } = useTranslation();
  const { slug } = useParams();

  return (
    <Layout>
      <Meta
        title={t('quiz:title')}
        description={t('quiz:description')}
        url="/404"
        image="/favicon/android-chrome-512x512.png"
      />
    </Layout>
  );
};

export default Quiz;

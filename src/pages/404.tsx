import { FC, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

import Layout from 'components/layout/layout';
import Meta from 'components/seo/meta';

const Error404: FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { t } = useTranslation();

  return (
    <Layout>
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
    </Layout>
  );
};

export default Error404;

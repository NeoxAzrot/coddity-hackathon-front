import { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import Layout from 'components/layout/layout';
import Meta from 'components/seo/meta';

const Ranks: FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { t } = useTranslation();

  return (
    <Layout>
      <Meta
        title={t('ranks:title')}
        description={t('ranks:description')}
        url="/404"
        image="/favicon/android-chrome-512x512.png"
      />
    </Layout>
  );
};

export default Ranks;

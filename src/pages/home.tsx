import { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import Layout from 'components/layout/layout';
import Meta from 'components/seo/meta';

const Home: FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { t: tSeo } = useTranslation('seo');

  return (
    <Layout>
      <Meta
        title={tSeo('title')}
        description={tSeo('description')}
        url="/"
        image="/favicon/android-chrome-512x512.png"
      />
    </Layout>
  );
};

export default Home;

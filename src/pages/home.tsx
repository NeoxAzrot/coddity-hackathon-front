import { useMutation } from '@apollo/client';
import { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { CREATE_SURVEY } from 'api/survey.apollo';

import About from 'components/home/about';
import Data from 'components/home/data';
import Hero from 'components/home/hero';
import Layout from 'components/layout/layout';
import Meta from 'components/seo/meta';

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

      <Hero onClick={handleCreateQuiz} />

      <About onClick={handleCreateQuiz} />

      <Data />
    </Layout>
  );
};

export default Home;

import { useQuery } from '@apollo/client';
import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import theme from 'theme';

import { GET_SURVEY } from 'api/survey.apollo';

import Flex from 'components/layout/flex';
import InlineButton from 'components/layout/inlineButton';
import Layout from 'components/layout/layout';
import Answer from 'components/question/answer';
import Counter from 'components/question/counter';
import Explanation from 'components/question/explanation';
import Question from 'components/question/question';
import Meta from 'components/seo/meta';
import Challenge from 'components/win/challenge';
import Emoji from 'components/win/emoji';
import Gift from 'components/win/gift';
import Score from 'components/win/score';
import Share from 'components/win/share';

const Quiz: FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { t } = useTranslation();
  const navigate = useNavigate();
  const { slug } = useParams();
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [question, setQuestion] = useState<Question>();
  const [correctAnswers, setCorrectAnswers] = useState<number>(0);
  const [showExplanation, setShowExplanation] = useState<boolean>(false);
  const [showShare, setShowShare] = useState<boolean>(false);

  const { loading, data } = useQuery<GetSurvey>(GET_SURVEY, {
    variables: { slug },
  });

  const maxQuestions = data?.survey.questions.results.length || 0;

  useEffect(() => {
    if (data?.survey) {
      const nextQuestion = data?.survey.questions.results[questionIndex];
      setQuestion(nextQuestion);
    }
  }, [data, questionIndex]);

  const handleAnswerClick = (correct: boolean) => {
    if (correct) {
      setCorrectAnswers(correctAnswers + 1);
    }

    setShowExplanation(true);
  };

  const handleNextQuestion = () => {
    setShowExplanation(false);
    setQuestionIndex(questionIndex + 1);
  };

  const getAnswerColor = (index: number) => {
    switch (index) {
      case 0:
        return theme.colors.primary;
      case 1:
        return theme.colors.secondary;
      case 2:
        return theme.colors.tertiary;
      case 3:
        return theme.colors.quaternary;

      default:
        return theme.colors.black;
    }
  };

  return (
    <Layout menuHidden fullPage>
      <Meta
        title={t('seo:quiz.title')}
        description={t('seo:quiz.description')}
        url="/quiz"
        image="/favicon/android-chrome-512x512.png"
      />

      {question && questionIndex < maxQuestions && (
        <>
          <Flex align="center" direction="column" marginTop="2rem">
            <Flex direction="column" align="center" width="80%">
              <Question question={question.question} />

              <Flex direction="column" align="start" width="100%" marginTop="2rem">
                {!showExplanation ? (
                  <>
                    {question.answers.results.map((item, index) => {
                      const { id, answer, correct } = item;
                      const color = getAnswerColor(index);
                      return (
                        <Flex marginTop="5rem" key={id}>
                          <Answer
                            answer={answer}
                            color={color}
                            onClick={() => handleAnswerClick(correct)}
                          />
                        </Flex>
                      );
                    })}
                  </>
                ) : (
                  <Explanation explanation={question.explanation} onClick={handleNextQuestion} />
                )}
              </Flex>
            </Flex>
          </Flex>

          {questionIndex < 1 && !showExplanation && (
            <Flex marginTop="5rem">
              <InlineButton
                content={t('button.previous')}
                onClick={() => {
                  navigate('/');
                }}
                arrowPosition="left"
              />
            </Flex>
          )}

          <Counter count={questionIndex + 1} maxQuestions={maxQuestions} />
        </>
      )}

      {questionIndex === maxQuestions && !loading && !showShare && (
        <>
          <Flex align="center" direction="column" marginTop="2rem">
            <Flex direction="column" align="center" width="80%">
              <Score correctAnswers={correctAnswers} />

              <Gift />

              <Share score={correctAnswers} setShowShare={setShowShare} />
            </Flex>
          </Flex>

          <Flex marginTop="5rem" justify="end">
            <InlineButton
              content={t('button.back_home')}
              onClick={() => {
                navigate('/');
              }}
              arrowPosition="right"
            />
          </Flex>

          <Emoji />
        </>
      )}

      {showShare && slug && (
        <>
          <Flex align="center" direction="column" marginTop="2rem">
            <Flex direction="column" align="center" width="80%">
              <Challenge slug={slug} />
            </Flex>
          </Flex>

          <Flex marginTop="5rem">
            <InlineButton
              content={t('button.previous')}
              onClick={() => {
                setShowShare(false);
              }}
              arrowPosition="left"
            />
          </Flex>
        </>
      )}
    </Layout>
  );
};

export default Quiz;

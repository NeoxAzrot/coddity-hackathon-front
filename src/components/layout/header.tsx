import { useMutation } from '@apollo/client';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import theme from 'theme';

import { CREATE_SURVEY } from 'api/survey.apollo';

import Flex from 'components/layout/flex';
import Text from 'components/layout/text';

interface HeaderProps {
  menuHidden?: boolean;
}

const HeaderContainer = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const Header: FC<HeaderProps> = ({ menuHidden }) => {
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
    <HeaderContainer>
      <Link to="/">
        <img src="/assets/images/logo.png" alt="" />
      </Link>

      {!menuHidden && (
        <Flex>
          <Text
            content={t('nav.quiz')}
            color={theme.colors.black}
            fontFamily={theme.fonts.secondary}
            size="2.6rem"
            onClick={handleCreateQuiz}
          />
          <Link to="#about">
            <Text
              content={t('nav.about')}
              color={theme.colors.black}
              fontFamily={theme.fonts.secondary}
              size="2.6rem"
              marginLeft="4.4rem"
            />
          </Link>
          <Link to="#data">
            <Text
              content={t('nav.data')}
              color={theme.colors.black}
              fontFamily={theme.fonts.secondary}
              size="2.6rem"
              marginLeft="4.4rem"
            />
          </Link>
          <Link to="/ranks">
            <Text
              content={t('nav.ranks')}
              color={theme.colors.black}
              fontFamily={theme.fonts.secondary}
              size="2.6rem"
              marginLeft="4.4rem"
            />
          </Link>
        </Flex>
      )}
    </HeaderContainer>
  );
};

export default Header;

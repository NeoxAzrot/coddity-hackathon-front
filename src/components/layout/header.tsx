import { useMutation } from '@apollo/client';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import theme from 'theme';

import { CREATE_SURVEY } from 'api/survey.apollo';

import Button from 'components/layout/button';
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

const Image = styled.img`
  height: 4rem;
`;

const LinkContainer = styled.div`
  margin-left: 4rem;

  a {
    transition: color 0.2s ease-in-out;

    &:hover {
      color: ${theme.colors.primary};
    }
  }
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
        <Image src="/assets/images/logo.png" alt="Logo" />
      </Link>

      {!menuHidden && (
        <Flex align="center">
          <LinkContainer>
            <Button
              content={t('nav.quiz')}
              onClick={handleCreateQuiz}
              fontFamily={theme.fonts.secondary}
              size="2.2rem"
              weight="400"
              secondary
              small
            />
          </LinkContainer>

          <LinkContainer>
            <a href="/#about">
              <Text content={t('nav.about')} fontFamily={theme.fonts.secondary} size="2.2rem" />
            </a>
          </LinkContainer>

          <LinkContainer>
            <a href="/#data">
              <Text content={t('nav.data')} fontFamily={theme.fonts.secondary} size="2.2rem" />
            </a>
          </LinkContainer>
        </Flex>
      )}
    </HeaderContainer>
  );
};

export default Header;

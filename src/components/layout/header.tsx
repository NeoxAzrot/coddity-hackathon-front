import { useMutation } from '@apollo/client';
import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import theme from 'theme';

import { CREATE_SURVEY } from 'api/survey.apollo';

import Button from 'components/layout/button';
import Flex from 'components/layout/flex';
import Text from 'components/layout/text';

import { useViewport } from 'hooks/useViewport';

interface HeaderProps {
  menuHidden?: boolean;
}

interface BurgerProps {
  active?: boolean;
}

interface StyledMobileFlexProps {
  active?: boolean;
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

  &:first-child {
    margin-left: 0;
  }

  a,
  p {
    transition: color 0.2s ease-in-out;

    &:hover {
      color: ${theme.colors.primary};
    }
  }

  button p {
    &:hover {
      color: inherit;
    }
  }

  @media screen and (max-width: ${theme.layout.md}) {
    margin-left: 0;
    margin-top: 3rem;

    &:first-child {
      margin-top: 0;
    }
  }
`;

const BurgerContainer = styled.div`
  cursor: pointer;
  height: 3rem;
  position: relative;
  width: 3rem;
  z-index: 20;
`;

const Burger = styled.span<BurgerProps>`
  background-color: ${({ active }) => (active ? 'transparent' : theme.colors.black)};
  display: block;
  height: 0.1rem;
  left: 0;
  position: absolute;
  top: 50%;
  transition: background-color 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  width: 100%;

  &:before,
  &:after {
    background-color: ${theme.colors.black};
    content: '';
    display: block;
    height: 0.1rem;
    transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    width: 100%;
  }

  &:before {
    transform: ${({ active }) => (active ? 'rotate(45deg)' : 'translateY(-1rem)')};
  }

  &:after {
    transform: ${({ active }) => (active ? 'rotate(-45deg)' : 'translateY(1rem)')};
  }
`;

const StyledMobileFlex = styled(Flex)<StyledMobileFlexProps>`
  background-color: ${theme.colors.background};
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  transform: ${({ active }) => (active ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  width: 100vw;
  z-index: 10;
`;

const Header: FC<HeaderProps> = ({ menuHidden }) => {
  const [createSurvey, { error }] = useMutation<CreateSurvey>(CREATE_SURVEY);

  const navigate = useNavigate();
  const { t } = useTranslation();
  const { isMobile } = useViewport();

  const [isMenuActive, setMenuActive] = useState<boolean>(false);

  const handleCreateQuiz = async () => {
    await createSurvey().then((res) => {
      if (!error) {
        navigate(`/quiz/${res.data?.createSurvey.slug}`);
      }
    });
  };

  useEffect(() => {
    if (isMenuActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuActive]);

  return (
    <HeaderContainer>
      <Link to="/">
        <Image src="/assets/images/logo.png" alt="Logo" />
      </Link>

      {!menuHidden && (
        <>
          {isMobile ? (
            <>
              <BurgerContainer
                onClick={() => {
                  setMenuActive(!isMenuActive);
                }}
              >
                <Burger active={isMenuActive} />
              </BurgerContainer>

              <StyledMobileFlex
                direction="column"
                justify="center"
                align="center"
                active={isMenuActive}
              >
                <LinkContainer>
                  <Button
                    content={t('nav.quiz')}
                    onClick={handleCreateQuiz}
                    fontFamily={theme.fonts.secondary}
                    size="2.8rem"
                    weight="400"
                    secondary
                    small
                  />
                </LinkContainer>

                <LinkContainer>
                  <a
                    href="/#about"
                    onClick={() => {
                      setMenuActive(false);
                    }}
                  >
                    <Text
                      content={t('nav.about')}
                      fontFamily={theme.fonts.secondary}
                      size="2.8rem"
                    />
                  </a>
                </LinkContainer>

                <LinkContainer>
                  <a
                    href="/#data"
                    onClick={() => {
                      setMenuActive(false);
                    }}
                  >
                    <Text
                      content={t('nav.data')}
                      fontFamily={theme.fonts.secondary}
                      size="2.8rem"
                    />
                  </a>
                </LinkContainer>
              </StyledMobileFlex>
            </>
          ) : (
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
        </>
      )}
    </HeaderContainer>
  );
};

export default Header;

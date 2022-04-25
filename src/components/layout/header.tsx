import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import theme from 'theme';

import Flex from './flex';
import Text from './text';

const Container = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const Header: FC = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Link to="/">
        <img src="assets/images/logo.png" alt="" />
      </Link>
      <Flex>
        <Link to="/d">
          <Text
            content={t('nav.quiz')}
            color={theme.colors.black}
            fontFamily={theme.fonts.secondary}
            size="2.6rem"
          />
        </Link>
        <Link to="#About">
          <Text
            content={t('nav.about')}
            color={theme.colors.black}
            fontFamily={theme.fonts.secondary}
            size="2.6rem"
            marginLeft="4.4rem"
          />
        </Link>
        <Link to="#Data">
          <Text
            content={t('nav.data')}
            color={theme.colors.black}
            fontFamily={theme.fonts.secondary}
            size="2.6rem"
            marginLeft="4.4rem"
          />
        </Link>
      </Flex>
    </Container>
  );
};

export default Header;

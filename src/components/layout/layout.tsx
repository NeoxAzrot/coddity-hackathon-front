import { FC } from 'react';
import styled from 'styled-components';
import theme from 'theme';

import Footer from 'components/layout/footer';
import Header from 'components/layout/header';

import { useViewport } from 'hooks/useViewport';

interface LayoutProps {
  menuHidden?: boolean;
  fullPage?: boolean;
}

interface LayoutContainerProps {
  fullPage?: boolean;
}

const LayoutContainer = styled.div<LayoutContainerProps>`
  display: flex;
  flex-direction: column;
  height: ${({ fullPage }) => fullPage && '100vh'};
  min-height: 100vh;
  padding: 6rem;
  width: 100vw;

  @media screen and (max-width: ${theme.layout.md}) {
    padding: 2rem;
  }
`;

const Layout: FC<LayoutProps> = ({ children, menuHidden, fullPage }) => {
  const { isMobile } = useViewport();
  return (
    <LayoutContainer fullPage={fullPage}>
      <Header menuHidden={menuHidden} />
      <main>{children}</main>
      {fullPage && isMobile ? <></> : <Footer fullPage={fullPage} />}
    </LayoutContainer>
  );
};

export default Layout;

import { FC } from 'react';
import styled from 'styled-components';

import Footer from 'components/layout/footer';
import Header from 'components/layout/header';

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
`;

const Layout: FC<LayoutProps> = ({ children, menuHidden, fullPage }) => {
  return (
    <LayoutContainer fullPage={fullPage}>
      <Header menuHidden={menuHidden} />
      <main>{children}</main>
      <Footer fullPage={fullPage} />
    </LayoutContainer>
  );
};

export default Layout;

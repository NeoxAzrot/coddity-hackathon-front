import { FC } from 'react';
import styled from 'styled-components';

import Footer from 'components/layout/footer';
import Header from 'components/layout/header';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 1.5rem;
  top: 18px;
  width: 100vw;
`;

const Layout: FC = ({ children }) => {
  return (
    <Container>
      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  );
};

export default Layout;

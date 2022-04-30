import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { FC } from 'react';
import { HelmetProvider } from 'react-helmet-async';

import { ViewportProvider } from 'hooks/useViewport';

import { GlobalStyle, ResetStyle } from 'theme/global';

import Router from './router';

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_URL,
  cache: new InMemoryCache(),
});

const App: FC = () => {
  return (
    <ApolloProvider client={client}>
      <ViewportProvider>
        <HelmetProvider>
          <ResetStyle />
          <GlobalStyle />
          <Router />
        </HelmetProvider>
      </ViewportProvider>
    </ApolloProvider>
  );
};

export default App;

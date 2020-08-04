import '../styles/index.css';
import Layout from '../components/Layout';

import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../lib/apolloClient';

export default function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <Layout>
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </Layout>
  );
}

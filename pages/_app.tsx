import { AppProps } from 'next/app';
import { FC } from 'react';
import 'antd/dist/antd.css';
import { Provider as AuthProvider } from 'next-auth/client';
import { ApolloProvider } from '@apollo/client';
import Head from 'next/head';

import 'styles/index.css';
import Navbar from 'components/Navbar/Navbar';
import Footer from 'components/Footer/Footer';
import useApollo from 'hooks/useApollo';

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  const client = useApollo();

  return (
    <>
      <Head>
        <script
          src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY}&libraries=places`}
        ></script>
      </Head>
      <ApolloProvider client={client}>
        <AuthProvider session={pageProps.session}>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </AuthProvider>
      </ApolloProvider>
    </>
  );
};

export default MyApp;

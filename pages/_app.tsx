import { AppProps } from 'next/app';
import { FC } from 'react';
import 'antd/dist/antd.css';
import { Provider } from 'next-auth/client';

import 'styles/index.css';
import Navbar from 'components/Navbar/Navbar';
import Footer from 'components/Footer/Footer';

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  <Provider session={pageProps.session}>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </Provider>
);

export default MyApp;

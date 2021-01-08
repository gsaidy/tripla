import { AppProps } from 'next/app';
import { FC } from 'react';
import 'antd/dist/antd.css';

import '../styles/index.css';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  <>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </>
);

export default MyApp;

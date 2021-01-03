import { AppProps } from 'next/app';
import { FC } from 'react';
import 'antd/dist/antd.css';

import '../styles/index.css';
import Navbar from '../components/Navbar/Navbar';

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  <>
    <Navbar />
    <Component {...pageProps} />
  </>
);

export default MyApp;

import { AppProps } from 'next/app';
import { FC } from 'react';
import 'antd/dist/antd.css';

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />;

export default MyApp;

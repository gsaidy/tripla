import { FC } from 'react';

import SignInBannerButton from '../atoms/SignInBannerButton';
import SignInBannerText from '../atoms/SignInBannerText';
import SignInBannerClose from '../atoms/SignInBannerClose';

const SignInBanner: FC = () => (
  <div className="bg-blue-300">
    <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between flex-wrap">
        <div className="w-0 flex-1 flex items-center">
          <SignInBannerButton />
          <SignInBannerText />
        </div>
        <SignInBannerClose />
      </div>
    </div>
  </div>
);

export default SignInBanner;

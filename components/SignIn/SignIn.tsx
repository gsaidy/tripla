import { FC } from 'react';
import { GoogleOutlined } from '@ant-design/icons';

import SignInLogo from './molecules/SignInLogo';
import SignInTitle from './molecules/SignInTitle';
import SignInButton from './molecules/SignInButton';
import { Provider } from './enum/Provider';

const SignIn: FC = () => (
  <div className="min-h-screen flex items-center justify-center -mt-16 md:-mt-13 lg:-mt-8 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full space-y-8">
      <div>
        <SignInLogo />
        <SignInTitle />
      </div>
      <div className="space-y-2 flex items-center flex-col">
        <SignInButton
          provider={Provider.Google}
          icon={<GoogleOutlined className="text-yellow-400" />}
        />
        {/* <SignInButton
          provider={Provider.Facebook}
          icon={<FacebookOutlined className="text-blue-500" />}
        />
        <SignInButton provider={Provider.Github} icon={<GithubOutlined />} /> */}
      </div>
    </div>
  </div>
);

export default SignIn;

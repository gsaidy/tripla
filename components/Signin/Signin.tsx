import { FC } from 'react';
import { GoogleOutlined, FacebookOutlined, GithubOutlined } from '@ant-design/icons';

import SigninLogo from './molecules/SigninLogo';
import SigninTitle from './molecules/SigninTitle';
import SigninButton from './molecules/SigninButton';
import { Provider } from './enum/Provider';

const Signin: FC = () => (
  <div className="min-h-screen flex items-center justify-center -mt-16 md:-mt-13 lg:-mt-8 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full space-y-8">
      <div>
        <SigninLogo />
        <SigninTitle />
      </div>
      <div className="space-y-2 flex items-center flex-col">
        <SigninButton
          provider={Provider.Google}
          icon={<GoogleOutlined className="text-yellow-400" />}
        />
        <SigninButton
          provider={Provider.Facebook}
          icon={<FacebookOutlined className="text-blue-500" />}
        />
        <SigninButton provider={Provider.Github} icon={<GithubOutlined />} />
      </div>
    </div>
  </div>
);

export default Signin;

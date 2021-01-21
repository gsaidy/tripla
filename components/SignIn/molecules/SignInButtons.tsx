import { FC } from 'react';
import { GoogleOutlined, FacebookOutlined, GithubOutlined } from '@ant-design/icons';

import SignInButton from '../atoms/SignInButton';
import { Provider } from '../enums/Provider';

const SignInButtons: FC = () => (
  <div className="space-y-2 flex items-center flex-col">
    <SignInButton
      provider={Provider.Google}
      icon={<GoogleOutlined className="text-yellow-400" />}
    />
    <SignInButton
      provider={Provider.Facebook}
      icon={<FacebookOutlined className="text-blue-500" />}
    />
    <SignInButton provider={Provider.Github} icon={<GithubOutlined />} />
  </div>
);

export default SignInButtons;

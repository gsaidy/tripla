import { FC, ReactNode } from 'react';
import { Button } from 'antd';

import { Provider } from '../enum/Provider';

const SigninButton: FC<{ provider: Provider; icon: ReactNode }> = ({ provider, icon }) => (
  <Button className="flex items-center justify-center w-80" size="large" icon={icon}>
    Sign in with {provider}
  </Button>
);

export default SigninButton;

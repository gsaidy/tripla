import { FC, ReactNode } from 'react';
import { Button } from 'antd';
import { signIn } from 'next-auth/client';

import { Provider } from '../enum/Provider';
import { capitalize } from '../../../utils/capitalize';

const SigninButton: FC<{ provider: Provider; icon: ReactNode }> = ({ provider, icon }) => (
  <Button
    className="flex items-center justify-center w-80"
    size="large"
    icon={icon}
    onClick={() => signIn(provider)}
  >
    Sign in with {capitalize(provider)}
  </Button>
);

export default SigninButton;

import { FC, ReactNode } from 'react';
import { Button } from 'antd';
import { signIn } from 'next-auth/client';
import { useRouter } from 'next/router';

import { Provider } from '../enum/Provider';
import { capitalize } from '../../../utils/capitalize';

const SignInButton: FC<{ provider: Provider; icon: ReactNode }> = ({ provider, icon }) => {
  const { query } = useRouter();
  const callbackUrl = query?.callbackUrl || '/';

  return (
    <Button
      className="flex items-center justify-center w-80"
      size="large"
      icon={icon}
      onClick={() => signIn(provider, { callbackUrl })}
    >
      Sign in with {capitalize(provider)}
    </Button>
  );
};

export default SignInButton;

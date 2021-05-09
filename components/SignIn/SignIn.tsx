import { FC } from 'react';

import SignInLogo from './molecules/SignInLogo';
import SignInTitle from './molecules/SignInTitle';
import SignInButtons from './molecules/SignInButtons';

const SignIn: FC = () => (
  <div className="min-h-tripla flex items-center justify-center px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full my-5 space-y-8">
      <div>
        <SignInLogo />
        <SignInTitle />
      </div>
      <SignInButtons />
    </div>
  </div>
);

export default SignIn;

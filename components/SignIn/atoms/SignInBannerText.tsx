import { FC } from 'react';
import { signIn } from 'next-auth/client';

const SignInBannerText: FC = () => (
  <p className="ml-3 font-medium text-white">
    <span>
      <span className="italic">Recommended: </span>
      <button className="underline hover:text-blue-800 focus:outline-none" onClick={() => signIn()}>
        Sign in
      </button>{' '}
      so you could edit your template later if needed.
    </span>
  </p>
);

export default SignInBannerText;

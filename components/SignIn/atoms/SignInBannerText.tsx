import { FC } from 'react';
import { signIn } from 'next-auth/client';

const SignInBannerText: FC = () => (
  <p className="ml-3 font-medium text-white">
    <span>
      <span className="italic">Recommended: </span>
      <a
        className="underline hover:text-blue-800"
        role="button"
        tabIndex={-1}
        onClick={() => signIn()}
        onKeyDown={() => signIn()}
      >
        Sign in
      </a>{' '}
      so you could edit your template later if needed.
    </span>
  </p>
);

export default SignInBannerText;

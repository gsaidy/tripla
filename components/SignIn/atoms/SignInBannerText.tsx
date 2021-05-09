import { FC } from 'react';
import { signIn } from 'next-auth/client';

import EntityType from 'enums/entityType';

const SignInBannerText: FC<{ entity: EntityType }> = ({ entity }) => (
  <p className="ml-3 font-medium text-white">
    <span>
      <span className="italic">Recommended: </span>
      <button className="underline hover:text-blue-800 focus:outline-none" onClick={() => signIn()}>
        Sign in
      </button>{' '}
      so you could edit your {entity} later if needed.
    </span>
  </p>
);

export default SignInBannerText;

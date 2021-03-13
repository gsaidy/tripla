import { FC, useState } from 'react';

import SignInBannerButton from '../atoms/SignInBannerButton';
import SignInBannerText from '../atoms/SignInBannerText';
import SignInBannerClose from '../atoms/SignInBannerClose';
import EntityType from 'enums/entityType';

const SignInBanner: FC<{ entity: EntityType }> = ({ entity }) => {
  const [hideBanner, setHideBanner] = useState(false);

  if (hideBanner) return null;
  return (
    <div className="bg-blue-300 max-w-8xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between flex-wrap">
        <div className="w-0 flex-1 flex items-center">
          <SignInBannerButton />
          <SignInBannerText entity={entity} />
        </div>
        <SignInBannerClose onClick={() => setHideBanner(true)} />
      </div>
    </div>
  );
};

export default SignInBanner;

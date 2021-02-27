import { FC } from 'react';
import { useSession } from 'next-auth/client';

import MobileNavbarHeader from '../molecules/MobileNavbarHeader';
import MobileNavbarItems from '../molecules/MobileNavbarItems';
import MobileNavbarSignInButton from '../molecules/MobileNavbarSignInButton';
import MobileNavbarProfile from '../molecules/MobileNavbarProfile';
import MobileNavbarContainer from '../molecules/MobileNavbarContainer';

const MobileNavbar: FC = () => {
  const [session] = useSession();

  return (
    <MobileNavbarContainer>
      <div className="pt-5 pb-6 px-5">
        <MobileNavbarHeader />
        <MobileNavbarItems />
      </div>
      {session ? <MobileNavbarProfile /> : <MobileNavbarSignInButton />}
    </MobileNavbarContainer>
  );
};

export default MobileNavbar;

import { FC } from 'react';
import { useSession } from 'next-auth/client';

import MobileNavbarHeader from '../molecules/MobileNavbarHeader';
import MobileNavbarItems from '../molecules/MobileNavbarItems';
import MobileNavbarSignInButton from '../molecules/MobileNavbarSignInButton';
import MobileNavbarProfile from '../molecules/MobileNavbarProfile';
import MobileNavbarContainer from '../molecules/MobileNavbarContainer';

const MobileNavbar: FC<{ closeNavbar: () => void }> = ({ closeNavbar }) => {
  const [session] = useSession();

  return (
    <MobileNavbarContainer>
      <div className="pt-5 pb-6 px-5">
        <MobileNavbarHeader closeNavbar={closeNavbar} />
        <MobileNavbarItems closeNavbar={closeNavbar} />
      </div>
      {session ? (
        <MobileNavbarProfile closeNavbar={closeNavbar} />
      ) : (
        <MobileNavbarSignInButton closeNavbar={closeNavbar} />
      )}
    </MobileNavbarContainer>
  );
};

export default MobileNavbar;

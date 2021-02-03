import { FC } from 'react';
import { useSession } from 'next-auth/client';

import MobileNavbarHeader from '../atoms/MobileNavbarHeader';
import MobileNavbarItems from '../atoms/MobileNavbarItems';
import MobileNavbarSignInButton from '../atoms/MobileNavbarSignInButton';
import MobileNavbarProfile from '../atoms/MobileNavbarProfile';

const MobileNavbar: FC<{ closeNavbar: () => void }> = ({ closeNavbar }) => {
  const [session] = useSession();

  return (
    <div className="absolute z-20 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
        <div className="pt-5 pb-6 px-5">
          <MobileNavbarHeader closeNavbar={closeNavbar} />
          <MobileNavbarItems closeNavbar={closeNavbar} />
        </div>
        {session ? <MobileNavbarProfile /> : <MobileNavbarSignInButton closeNavbar={closeNavbar} />}
      </div>
    </div>
  );
};

export default MobileNavbar;

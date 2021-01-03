import { FC } from 'react';

import NavbarLogo from './molecules/NavbarLogo';
import NavbarSignInButton from './molecules/NavbarSignInButton';

const Navbar: FC = () => (
  <div className="relative bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="flex justify-between items-center border-b-2 border-gray-100 pt-4 pb-3 md:justify-start md:space-x-10">
        <NavbarLogo />
        <NavbarSignInButton />
      </div>
    </div>
  </div>
);

export default Navbar;

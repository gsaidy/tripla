import { FC } from 'react';

import NavbarLogo from './molecules/NavbarLogo';
import NavbarItems from './molecules/NavbarItems';
import NavbarSignInButton from './molecules/NavbarSignInButton';

const Navbar: FC = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6">
    <div className="flex justify-between items-center border-b-2 border-gray-100 pt-4 pb-2 md:justify-start md:space-x-10">
      <NavbarLogo />
      <NavbarItems />
      <NavbarSignInButton />
    </div>
  </div>
);

export default Navbar;

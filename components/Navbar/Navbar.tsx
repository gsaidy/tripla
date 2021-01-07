import { FC, useState } from 'react';

import NavbarLogo from './molecules/NavbarLogo';
import NavbarItems from './molecules/NavbarItems';
import NavbarSignInButton from './molecules/NavbarSignInButton';
import NavbarHamburgerButton from './molecules/NavbarHamburgerButton';
import MobileNavbar from './molecules/MobileNavbar';

const Navbar: FC = () => {
  const [showMobileNavbar, setShowMobileNavbar] = useState(false);

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 pt-4 pb-2 md:justify-start md:space-x-10">
          <NavbarLogo />
          {/* Navbar items that show on medium and large screens */}
          <NavbarItems />
          {/* Sign in button that show on medium and large screens */}
          <NavbarSignInButton />
          {/* Hamburger button to open navbar on mobile screens */}
          <NavbarHamburgerButton onClick={() => setShowMobileNavbar(true)} />
        </div>
      </div>
      {/* Navbar items that show on mobile screens */}
      {showMobileNavbar && <MobileNavbar onClose={() => setShowMobileNavbar(false)} />}
    </>
  );
};

export default Navbar;

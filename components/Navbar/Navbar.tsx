import { FC, useState } from 'react';

import NavbarContainer from './molecules/NavbarContainer';
import NavbarLogo from './molecules/NavbarLogo';
import NavbarItems from './molecules/NavbarItems';
import NavbarSignInButton from './molecules/NavbarSignInButton';
import NavbarHamburgerButton from './molecules/NavbarHamburgerButton';
import MobileNavbar from './molecules/MobileNavbar';

const Navbar: FC = () => {
  const [showMobileNavbar, setShowMobileNavbar] = useState(false);

  return (
    <>
      <NavbarContainer>
        {/* Navbar logo that show on all screens */}
        <NavbarLogo />
        {/* Navbar items that show on medium and large screens */}
        <NavbarItems />
        {/* Sign in button that show on medium and large screens */}
        <NavbarSignInButton />
        {/* Hamburger button to open navbar on mobile screens */}
        <NavbarHamburgerButton onClick={() => setShowMobileNavbar(true)} />
      </NavbarContainer>
      {/* Navbar items that show on mobile screens */}
      {showMobileNavbar && <MobileNavbar onClose={() => setShowMobileNavbar(false)} />}
    </>
  );
};

export default Navbar;

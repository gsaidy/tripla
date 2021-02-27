import { FC, useState, createContext } from 'react';
import { useSession } from 'next-auth/client';

import NavbarContainer from './organisms/NavbarContainer';
import NavbarLogo from './organisms/NavbarLogo';
import NavbarItems from './organisms/NavbarItems';
import NavbarSignInButton from './organisms/NavbarSignInButton';
import NavbarHamburgerButton from './organisms/NavbarHamburgerButton';
import MobileNavbar from './organisms/MobileNavbar';
import NavbarProfile from './organisms/NavbarProfile';
import NavbarSpinner from './organisms/NavbarSpinner';

export const NavbarContext = createContext<{
  closeMobileNavbar: () => void;
}>({
  closeMobileNavbar: () => ({}),
});

const Navbar: FC = () => {
  const [showMobileNavbar, setShowMobileNavbar] = useState(false);
  const [session, loading] = useSession();

  return (
    <>
      <NavbarContainer>
        {/* Navbar logo that shows on all screens */}
        <NavbarLogo />
        {/* Navbar items that show on medium and large screens */}
        <NavbarItems />
        {/*
          Spinner if user state is being fetched,
          User Profile if the user is signed in,
          Sign in button if the user is not signed in.
        */}
        {loading ? <NavbarSpinner /> : session ? <NavbarProfile /> : <NavbarSignInButton />}
        {/* Hamburger button to open navbar on mobile screens */}
        <NavbarHamburgerButton onClick={() => setShowMobileNavbar(true)} />
      </NavbarContainer>
      {/* Navbar items that show on mobile screens */}
      <NavbarContext.Provider value={{ closeMobileNavbar: () => setShowMobileNavbar(false) }}>
        {showMobileNavbar && <MobileNavbar />}
      </NavbarContext.Provider>
    </>
  );
};

export default Navbar;

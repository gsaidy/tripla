import { FC, useState } from 'react';

import NavbarProfileIcon from '../atoms/NavbarProfileIcon';
import NavbarProfileDropdown from '../atoms/NavbarProfileDropdown';

const TOGGLE_DROPDOWN_AFTER = 150;

const NavbarProfile: FC = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const hideDropdown = () => {
    setTimeout(() => {
      setShowDropdown(false);
    }, TOGGLE_DROPDOWN_AFTER);
  };

  return (
    <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
      <div className="relative">
        <NavbarProfileIcon onClick={() => setShowDropdown(!showDropdown)} onBlur={hideDropdown} />
        {showDropdown && <NavbarProfileDropdown />}
      </div>
    </div>
  );
};

export default NavbarProfile;

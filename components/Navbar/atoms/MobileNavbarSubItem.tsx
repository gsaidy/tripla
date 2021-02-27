import { FC, useContext } from 'react';
import Link from 'next/link';

import { NavbarContext } from '../Navbar';

const MobileNavbarSubItem: FC<{ text: string; href: string }> = ({ text, href }) => {
  const { closeMobileNavbar } = useContext(NavbarContext);

  return (
    <Link href={href}>
      <button
        className="block ml-3 text-lg font-medium text-gray-700 focus:outline-none"
        onClick={closeMobileNavbar}
      >
        {text}
      </button>
    </Link>
  );
};

export default MobileNavbarSubItem;

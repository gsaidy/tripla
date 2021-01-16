import { FC } from 'react';
import { signOut } from 'next-auth/client';

const NavbarProfileDropdown: FC = () => (
  <div
    className="origin-top-right z-10 absolute right-0 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5"
    role="menu"
    aria-orientation="vertical"
    aria-labelledby="user-menu"
  >
    <button
      className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none"
      role="menuitem"
      onClick={() => signOut({ callbackUrl: window.location.pathname })}
    >
      Sign out
    </button>
  </div>
);

export default NavbarProfileDropdown;

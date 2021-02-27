import { FC } from 'react';
import { signOut } from 'next-auth/client';
import { useRouter } from 'next/router';

import NavbarProfileDropdownItem from '../atoms/NavbarProfileDropdownItem';

const NavbarProfileDropdown: FC = () => {
  const router = useRouter();

  return (
    <div
      className="origin-top-right z-10 absolute right-0 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="user-menu"
    >
      <NavbarProfileDropdownItem text="My Templates" onClick={() => router.push('/my-templates')} />
      <NavbarProfileDropdownItem
        text="Sign Out"
        onClick={() => signOut({ callbackUrl: window.location.pathname })}
      />
    </div>
  );
};

export default NavbarProfileDropdown;

import { FC } from 'react';
import Link from 'next/link';

const NavbarLogo: FC<{ action?: () => void }> = ({ action = () => ({}) }) => (
  <div className="flex justify-start lg:w-0 lg:flex-1">
    <Link href="/">
      <a role="button" tabIndex={-1} onClick={action} onKeyDown={action}>
        <span className="sr-only">Tripla</span>
        <img className="h-12 w-auto sm:h-14" src="/logo.png" alt="logo" />
      </a>
    </Link>
  </div>
);

export default NavbarLogo;

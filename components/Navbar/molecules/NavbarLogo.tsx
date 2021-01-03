import { FC } from 'react';
import Link from 'next/link';

const NavbarLogo: FC = () => (
  <div className="flex justify-start lg:w-0 lg:flex-1">
    <Link href="/">
      <a>
        <span className="sr-only">Tripla</span>
        <img className="h-10 w-auto sm:h-12" src="/logo.png" alt="logo" />
      </a>
    </Link>
  </div>
);

export default NavbarLogo;

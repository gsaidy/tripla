import { FC } from 'react';
import { Button } from 'antd';
import Link from 'next/link';

const NavbarSignInButton: FC = () => (
  <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
    <Link href="/signin">
      <Button type="primary" size="large" shape="round">
        Sign In
      </Button>
    </Link>
  </div>
);

export default NavbarSignInButton;

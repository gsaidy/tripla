import { FC } from 'react';
import { Button } from 'antd';
import { signIn } from 'next-auth/client';

const NavbarSignInButton: FC = () => (
  <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
    <Button type="primary" size="large" shape="round" onClick={() => signIn()}>
      Sign In
    </Button>
  </div>
);

export default NavbarSignInButton;

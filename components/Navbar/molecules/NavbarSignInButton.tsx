import { FC } from 'react';
import { Button } from 'antd';

const NavbarSignInButton: FC = () => (
  <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
    <Button type="primary" size="large" shape="round">
      Sign In
    </Button>
  </div>
);

export default NavbarSignInButton;

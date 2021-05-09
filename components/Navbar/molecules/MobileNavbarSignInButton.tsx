import { FC, useContext } from 'react';
import Link from 'next/link';
import { Button } from 'antd';

import { NavbarContext } from '../Navbar';

const MobileNavbarSignInButton: FC = () => {
  const { closeMobileNavbar } = useContext(NavbarContext);

  return (
    <div className="py-6 px-5 space-y-6">
      <Link href="/signin">
        <Button className="rounded" type="primary" size="large" block onClick={closeMobileNavbar}>
          Sign In
        </Button>
      </Link>
    </div>
  );
};

export default MobileNavbarSignInButton;

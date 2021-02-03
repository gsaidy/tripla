import { FC } from 'react';
import Link from 'next/link';
import { Button } from 'antd';

const MobileNavbarSignInButton: FC<{ closeNavbar: () => void }> = ({ closeNavbar }) => (
  <div className="py-6 px-5 space-y-6">
    <Link href="/signin">
      <Button className="rounded" type="primary" size="large" block onClick={closeNavbar}>
        Sign In
      </Button>
    </Link>
  </div>
);

export default MobileNavbarSignInButton;

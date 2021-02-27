import { FC } from 'react';
import { Button } from 'antd';
import { signOut } from 'next-auth/client';

const MobileNavbarSignOutButton: FC = () => (
  <div className="mt-3 px-2 space-y-1">
    <Button
      className="rounded"
      type="primary"
      size="large"
      block
      onClick={() => signOut({ callbackUrl: window.location.pathname })}
    >
      Sign Out
    </Button>
  </div>
);

export default MobileNavbarSignOutButton;

import { FC, useContext } from 'react';
import { CloseOutlined } from '@ant-design/icons';

import NavbarLogo from '../organisms/NavbarLogo';
import { NavbarContext } from '../Navbar';

const MobileNavbarHeader: FC = () => {
  const { closeMobileNavbar } = useContext(NavbarContext);

  return (
    <div className="flex items-center justify-between">
      <NavbarLogo action={closeMobileNavbar} />
      <div className="-mr-2">
        <span className="sr-only">Close menu</span>
        <CloseOutlined
          className="text-3xl bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100"
          onClick={closeMobileNavbar}
        />
      </div>
    </div>
  );
};

export default MobileNavbarHeader;

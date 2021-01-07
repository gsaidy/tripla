import { FC } from 'react';
import { MenuOutlined } from '@ant-design/icons';

const NavbarHamburgerButton: FC<{ onClick: () => void }> = ({ onClick }) => (
  <div className="flex items-center justify-end md:hidden lg:w-0">
    <span className="sr-only">Open menu</span>
    <MenuOutlined
      className="text-3xl text-gray-400 hover:text-gray-500 hover:bg-gray-100 cursor-pointer mr-2"
      onClick={onClick}
    />
  </div>
);

export default NavbarHamburgerButton;

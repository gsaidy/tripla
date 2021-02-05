import { FC } from 'react';
import { Spin } from 'antd';

const NavbarSpinner: FC = () => (
  <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
    <Spin />
  </div>
);

export default NavbarSpinner;

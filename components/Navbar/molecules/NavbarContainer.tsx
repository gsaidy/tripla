import { FC, Node } from 'react';

const NavbarContainer: FC<{ children: Node }> = ({ children }) => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6">
    <div className="flex justify-between items-center border-b-2 border-gray-100 pt-4 pb-2 md:justify-start md:space-x-10">
      {children}
    </div>
  </div>
);

export default NavbarContainer;

import { FC, ReactNode } from 'react';

const MobileNavbarContainer: FC<{ children: ReactNode }> = ({ children }) => (
  <div className="absolute z-20 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
      {children}
    </div>
  </div>
);

export default MobileNavbarContainer;

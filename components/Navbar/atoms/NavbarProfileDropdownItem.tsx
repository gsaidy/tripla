import { FC } from 'react';

const NavbarProfileDropdownItem: FC<{ text: string; onClick: () => void }> = ({
  text,
  onClick,
}) => (
  <button
    className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none"
    role="menuitem"
    onClick={onClick}
  >
    {text}
  </button>
);

export default NavbarProfileDropdownItem;
